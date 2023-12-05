import selectCss from "@/components/common/header/language/lang.module.css";
import { Select } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";

const languages: string[] = ["Hi", "PJ", "BH", "GJ", "EN"];
const LanguagePicker = () => {
  return (
    <div>
      <Select
        classNames={selectCss}
        maw={80}
        rightSectionPointerEvents="none"
        rightSectionWidth={0}
        size="md"
        placeholder="Pick value"
        allowDeselect={false}
        withCheckIcon={false}
        defaultValue={languages[0]}
        data={languages}
        leftSection={<IconLanguage stroke={1.5} />}
      />
    </div>
  );
};

export default LanguagePicker;
