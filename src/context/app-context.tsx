"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { initialStores, initialUser } from "@/lib/initial-data";
import { Product, Store, User, UserRole } from "@/lib/types";

type AuthState = {
  isAuthorized: boolean;
};

type ProductForm = {
  name: string;
  category: string;
  price: string;
  discountPercent: string;
  stock: string;
  description: string;
};

type StoreSettingsForm = {
  name: string;
  shortDescription: string;
  primaryColor: string;
  location: string;
};

type AppContextValue = {
  auth: AuthState;
  user: User;
  stores: Store[];
  selectedStoreId: string;
  selectedStore: Store;
  favoriteStoreIds: string[];
  favoriteProductIds: string[];
  search: string;
  shareMessage: string;
  productForm: ProductForm;
  storeSettingsForm: StoreSettingsForm;
  editingProductId: string | null;
  login: () => void;
  logout: () => void;
  setSearch: (value: string) => void;
  selectStore: (storeId: string) => void;
  setActiveRole: (role: UserRole) => void;
  setProductForm: (form: ProductForm) => void;
  setStoreSettingsForm: (form: StoreSettingsForm) => void;
  hydrateProductForm: (product?: Product) => void;
  hydrateStoreSettingsForm: () => void;
  submitProduct: () => void;
  submitStoreSettings: () => void;
  toggleStoreFavorite: (storeId: string) => void;
  toggleProductFavorite: (productId: string) => void;
  shareEntity: (title: string, path: string) => Promise<void>;
  respondFriendInvite: (inviteId: string, action: "accept" | "reject") => void;
  respondStaffInvite: (inviteId: string, action: "accept" | "reject") => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const defaultProductForm: ProductForm = {
  name: "",
  category: "",
  price: "",
  discountPercent: "",
  stock: "",
  description: "",
};

const defaultStoreSettingsForm: StoreSettingsForm = {
  name: "",
  shortDescription: "",
  primaryColor: "#16846B",
  location: "",
};

export function AppProvider({ children }: PropsWithChildren) {
  const [auth, setAuth] = useState<AuthState>({ isAuthorized: false });
  const [user, setUser] = useState<User>(initialUser);
  const [stores, setStores] = useState<Store[]>(initialStores);
  const [selectedStoreId, setSelectedStoreId] = useState(initialStores[0].id);

  const [favoriteStoreIds, setFavoriteStoreIds] = useState<string[]>([]);
  const [favoriteProductIds, setFavoriteProductIds] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [shareMessage, setShareMessage] = useState("");

  const [productForm, setProductForm] =
    useState<ProductForm>(defaultProductForm);
  const [storeSettingsForm, setStoreSettingsForm] = useState<StoreSettingsForm>(
    defaultStoreSettingsForm,
  );
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const selectedStore = useMemo(
    () => stores.find((store) => store.id === selectedStoreId) ?? stores[0],
    [selectedStoreId, stores],
  );

  const login = useCallback(() => {
    setAuth({ isAuthorized: true });
  }, []);

  const logout = useCallback(() => {
    setAuth({ isAuthorized: false });
    setUser((current) => ({ ...current, activeRole: "buyer" }));
  }, []);

  const setActiveRole = useCallback(
    (role: UserRole) => {
      if (!user.availableRoles.includes(role)) {
        return;
      }

      setUser((current) => ({ ...current, activeRole: role }));
    },
    [user.availableRoles],
  );

  const hydrateStoreSettingsForm = useCallback(() => {
    setStoreSettingsForm({
      name: selectedStore.name,
      shortDescription: selectedStore.shortDescription,
      primaryColor: selectedStore.primaryColor,
      location: selectedStore.location,
    });
  }, [selectedStore]);

  const hydrateProductForm = useCallback((product?: Product) => {
    if (!product) {
      setProductForm(defaultProductForm);
      setEditingProductId(null);
      return;
    }

    setProductForm({
      name: product.name,
      category: product.category,
      price: String(product.price),
      discountPercent: String(product.discountPercent),
      stock: String(product.stock),
      description: product.description,
    });

    setEditingProductId(product.id);
  }, []);

  const selectStore = useCallback(
    (storeId: string) => {
      setSelectedStoreId(storeId);
      const targetStore = stores.find((store) => store.id === storeId);

      if (targetStore) {
        setStoreSettingsForm({
          name: targetStore.name,
          shortDescription: targetStore.shortDescription,
          primaryColor: targetStore.primaryColor,
          location: targetStore.location,
        });
      }

      setProductForm(defaultProductForm);
      setEditingProductId(null);
    },
    [stores],
  );

  const submitProduct = useCallback(() => {
    const parsedPrice = Number(productForm.price);
    const parsedStock = Number(productForm.stock);
    const parsedDiscountPercent = Number(productForm.discountPercent);

    if (
      !productForm.name.trim() ||
      Number.isNaN(parsedPrice) ||
      Number.isNaN(parsedStock) ||
      Number.isNaN(parsedDiscountPercent) ||
      parsedDiscountPercent < 0 ||
      parsedDiscountPercent > 100
    ) {
      return;
    }

    setStores((currentStores) =>
      currentStores.map((store) => {
        if (store.id !== selectedStore.id) {
          return store;
        }

        if (editingProductId) {
          return {
            ...store,
            products: store.products.map((product) =>
              product.id === editingProductId
                ? {
                    ...product,
                    name: productForm.name,
                    category: productForm.category || "Без категории",
                    price: parsedPrice,
                    discountPercent: parsedDiscountPercent,
                    stock: parsedStock,
                    description: productForm.description,
                  }
                : product,
            ),
          };
        }

        return {
          ...store,
          products: [
            {
              id: `product-${Date.now()}`,
              name: productForm.name,
              category: productForm.category || "Без категории",
              price: parsedPrice,
              discountPercent: parsedDiscountPercent,
              stock: parsedStock,
              description: productForm.description,
            },
            ...store.products,
          ],
        };
      }),
    );

    hydrateProductForm();
  }, [editingProductId, hydrateProductForm, productForm, selectedStore.id]);

  const submitStoreSettings = useCallback(() => {
    if (user.activeRole !== "director") {
      return;
    }

    setStores((currentStores) =>
      currentStores.map((store) => {
        if (store.id !== selectedStore.id) {
          return store;
        }

        return {
          ...store,
          name: storeSettingsForm.name || store.name,
          shortDescription:
            storeSettingsForm.shortDescription || store.shortDescription,
          primaryColor: storeSettingsForm.primaryColor || store.primaryColor,
          location: storeSettingsForm.location || store.location,
        };
      }),
    );
  }, [selectedStore.id, storeSettingsForm, user.activeRole]);

  const toggleStoreFavorite = useCallback((storeId: string) => {
    setFavoriteStoreIds((current) =>
      current.includes(storeId)
        ? current.filter((id) => id !== storeId)
        : [...current, storeId],
    );
  }, []);

  const toggleProductFavorite = useCallback((productId: string) => {
    setFavoriteProductIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }, []);

  const shareEntity = useCallback(async (title: string, path: string) => {
    const shareData = {
      title,
      text: `${title} · Marketplace PRI`,
      url: `https://pri.market${path}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage("Ссылка отправлена через системное меню.");
        return;
      }

      await navigator.clipboard.writeText(shareData.url);
      setShareMessage("Ссылка скопирована в буфер обмена.");
    } catch {
      setShareMessage("Не удалось поделиться ссылкой. Попробуйте снова.");
    }
  }, []);

  const respondFriendInvite = useCallback(
    (inviteId: string, action: "accept" | "reject") => {
      setUser((current) => ({
        ...current,
        friendInvites: current.friendInvites.map((invite) =>
          invite.id === inviteId
            ? {
                ...invite,
                status: action === "accept" ? "accepted" : "rejected",
              }
            : invite,
        ),
      }));
    },
    [],
  );

  const respondStaffInvite = useCallback(
    (inviteId: string, action: "accept" | "reject") => {
      setUser((current) => {
        const targetInvite = current.staffInvites.find(
          (invite) => invite.id === inviteId,
        );
        const nextInvites = current.staffInvites.map((invite) =>
          invite.id === inviteId
            ? {
                ...invite,
                status: action === "accept" ? "accepted" : "rejected",
              }
            : invite,
        );

        if (action === "accept" && targetInvite) {
          const nextRoles = current.availableRoles.includes(targetInvite.role)
            ? current.availableRoles
            : [...current.availableRoles, targetInvite.role];

          return {
            ...current,
            staffInvites: nextInvites,
            availableRoles: nextRoles,
          };
        }

        return {
          ...current,
          staffInvites: nextInvites,
        };
      });
    },
    [],
  );

  const value = useMemo<AppContextValue>(
    () => ({
      auth,
      user,
      stores,
      selectedStoreId,
      selectedStore,
      favoriteStoreIds,
      favoriteProductIds,
      search,
      shareMessage,
      productForm,
      storeSettingsForm,
      editingProductId,
      login,
      logout,
      setSearch,
      selectStore,
      setActiveRole,
      setProductForm,
      setStoreSettingsForm,
      hydrateProductForm,
      hydrateStoreSettingsForm,
      submitProduct,
      submitStoreSettings,
      toggleStoreFavorite,
      toggleProductFavorite,
      shareEntity,
      respondFriendInvite,
      respondStaffInvite,
    }),
    [
      auth,
      editingProductId,
      favoriteProductIds,
      favoriteStoreIds,
      hydrateProductForm,
      hydrateStoreSettingsForm,
      login,
      logout,
      productForm,
      respondFriendInvite,
      respondStaffInvite,
      search,
      selectedStore,
      selectedStoreId,
      selectStore,
      setActiveRole,
      shareEntity,
      shareMessage,
      storeSettingsForm,
      stores,
      submitProduct,
      submitStoreSettings,
      toggleProductFavorite,
      toggleStoreFavorite,
      user,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}
