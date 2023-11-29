import { Select } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";

const languages: string[] = [
  "Hindi",
  // "English",
  // "Gujarati",
  // "Punjabi",
  // "Bhojpuri",
];
const LanguagePicker = () => {
  return (
    <div>
      <Select
        maw={150}
        size="md"
        allowDeselect={false}
        placeholder="Pick value"
        defaultValue={languages[0]}
        data={languages}
        leftSection={<IconLanguage stroke={1.5} />}
        styles={{ dropdown: { boxShadow: "var(--mantine-shadow-sm)" } }}
      />
    </div>
  );
};

export default LanguagePicker;
