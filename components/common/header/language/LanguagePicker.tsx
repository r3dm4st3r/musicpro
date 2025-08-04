import selectCss from "@/components/common/header/language/lang.module.css";
import { Select } from "@toolsify/core";
import { TbLanguage } from "@toolsify/icons/tb";

const languages: string[] = ["Hi"];
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
        leftSection={<TbLanguage />}
      />
    </div>
  );
};

export default LanguagePicker;
