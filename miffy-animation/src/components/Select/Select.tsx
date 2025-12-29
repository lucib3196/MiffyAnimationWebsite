import type { HTMLAttributes } from "react";

export type SelectOption = {
    key: string;
    label: string;
};
type SelectProps = HTMLAttributes<HTMLSelectElement> & {
    options: SelectOption[];
    selected: string;
    setSelected: (val: string) => void;
};

export default function Select({
    options,
    selected,
    setSelected,
    ...props
}: SelectProps) {
    return (
        <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="
            font-pacifico
        bg-gray-100
        border-2 border-gray-800
        px-3 py-2
        text-sm
        font-medium
        rounded-md
        shadow-[2px_2px_0_#000]
        focus:outline-none
        focus:ring-2 focus:ring-gray-500
        cursor-pointer
        image-rendering-pixelated
      "
            {...props}
        >
            {options.map((v) => (
                <option key={v.key} value={v.key}>
                    {v.label}
                </option>
            ))}
        </select>
    );
}
