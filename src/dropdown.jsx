import Select from "react-select";

const courses = [
  { value: "data structures", label: "Data Structures" },
  { value: "algorithms", label: "Algorithms" },
  { value: "operating systems", label: "Operating Systems" },
  { value: "computer networks", label: "Computer Networks" },
  { value: "databases", label: "Databases" },
];

export default function Dropdown({ setinfo, info }) {
  return (
    <Select
      classNamePrefix="course"
      options={courses}
      isSearchable={true}
      placeholder="Search course..."
      onChange={(e) => setinfo({ ...info, course: e.value })}
      styles={{
        control: (base) => ({
          ...base,
          borderRadius: "10px",
          backgroundColor: "hsl(0, 0%, 20%)",
          padding: "0",
          margin: "5px 0",
          width: "100%",
        }),
        singleValue: (base) => ({
          ...base,
          color: "hsl(0, 0%, 75%)",
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "#111",
          color: "hsl(0, 0%, 75%)",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "#333" : "#111",
          color: "hsl(0, 0%, 75%)",
        }),
        input: (base) => ({
          ...base,
          color: "hsl(0, 0%, 75%)",
        }),
      }}
    />
  );
}
