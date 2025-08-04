import AuthorBg from "@/assets/img/1.svg";
import Image from "next/image";
import { Button, Paper, Tooltip } from "@toolsify/core";
import { TbBrandGithub } from "@toolsify/icons/tb";
const AuthorInfo = () => {
  return (
    <Paper className="w-full relative overflow-hidden">
      <Image
        src={AuthorBg}
        alt="R3DM4ST3R"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div>
          <div className="text-center mb-5">
            <h2 className="text-5xl mb-5 font-bold">R3DM4ST3R</h2>
            <p className="text-lg">
              Building web apps since years, efficient in building scalable
              software and solve competitive programming problems.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <Tooltip
              label="Github"
              color="teal"
              withArrow
              arrowSize={12}
              position="bottom"
              transitionProps={{ transition: "pop", duration: 200 }}
            >
              <Button
                component="a"
                href="https://github.com/r3dm4st3r"
                target="_blank"
                color="teal"
                variant="outline"
                h={40}
              >
                <TbBrandGithub />
              </Button>
            </Tooltip>
          </div>
          <p className="text-xs px-5 mt-5 text-center text-gray-300 italic">
            This project is using internal public APIs of JioSaavn (Music
            content credit and copyright claims are reserved by JioSaavn). I do
            not encourage to use this project for any kind of usage. This
            project is made only for showcasing the skills and for learning
            purpose. For any support or assistance, reach me out via website.
          </p>
        </div>
      </div>
    </Paper>
  );
};

export default AuthorInfo;
