"use client";

import { Select as SelectBase } from "@base-ui/react";

type Props<T> = {
  label: string;
  value: T | null;
  onChange: (value: T | null) => void;
  data: { label: string; value: T }[];
};

export const Select = <T,>(props: Props<T>) => {
  const { data, value, label, onChange } = props;
  return (
    <div className="flex flex-col h-14 md:h-16 bg-bg-secondary rounded-[18px] border border-border cursor-pointer">
      <SelectBase.Root
        items={data}
        value={value}
        modal={false}
        onValueChange={(val) => {
          onChange(val);
        }}
      >
        <SelectBase.Trigger
          className={
            "flex flex-row h-full items-center p-3 justify-between cursor-pointer gap-1 select-trigger"
          }
        >
          <div className="flex flex-col justify-center items-start flex-1 h-full">
            <SelectBase.Label
              className={`text-text-secondary text-left ${value ? "text-[12px]" : "text-[14px]"} font-medium`}
            >
              {label}
            </SelectBase.Label>
            <SelectBase.Value placeholder="" className="font-semibold" />
          </div>

          <SelectBase.Icon style={{ pointerEvents: "none" }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              style={{ display: "block", pointerEvents: "none" }}
            >
              <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
            </svg>
          </SelectBase.Icon>
        </SelectBase.Trigger>
        <SelectBase.Portal
          container={typeof window !== "undefined" ? document.body : null}
        >
          <SelectBase.Positioner
            sideOffset={4}
            alignItemWithTrigger={false}
            className={"z-50 flex flex-col gap-2 min-h-30"}
            style={{ zIndex: 999 }}
          >
            <SelectBase.Popup
              className={
                " min-w-(--anchor-width) rounded-[18px] bg-white shadow-lg"
              }
            >
              <SelectBase.ScrollUpArrow>Up</SelectBase.ScrollUpArrow>
              <SelectBase.List className="flex flex-col z-150 bg-white rounded-[18px] py-3 shadow-lg w-full gap-2 max-h-56 overflow-y-scroll">
                {data.map((i, index) => (
                  <SelectBase.Item
                    key={`item_${index}`}
                    value={i.value}
                    className={`cursor-pointer ${value === i.value ? "bg-bg-brand-400" : "bg-transparent"} p-3`}
                  >
                    <SelectBase.ItemText
                      className={`w-full font-semibold ${value === i.value ? "text-brand" : ""}`}
                    >
                      {i.label}
                    </SelectBase.ItemText>
                  </SelectBase.Item>
                ))}
              </SelectBase.List>
              <SelectBase.ScrollDownArrow>Down</SelectBase.ScrollDownArrow>
            </SelectBase.Popup>
          </SelectBase.Positioner>
        </SelectBase.Portal>
      </SelectBase.Root>
    </div>
  );
};
