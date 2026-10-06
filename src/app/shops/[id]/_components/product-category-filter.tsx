type Props = {
  categories: { id: number; title: string }[];
  value: number | null;
  onChange: (value: number | null) => void;
};

export const ProductCategoryFilter = (props: Props) => {
  const { categories, value, onChange } = props;

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      <button
        className={`font-semibold ${value === null ? "bg-brand text-white" : "bg-white text-text-secondary"} px-3.5 py-2 rounded-[100px] h-fit`}
        onClick={(e) => {
          e.preventDefault();
          onChange(null);
        }}
      >
        Все товары
      </button>
      {categories.map((i) => (
        <button
          key={`product_${i.id}`}
          className={`font-semibold ${value === i.id ? "bg-brand text-white" : "bg-white text-text-secondary"} px-3.5 py-2 rounded-[100px] w-fit h-fit`}
          onClick={() => onChange(i.id)}
        >
          {i.title}
        </button>
      ))}
    </div>
  );
};
