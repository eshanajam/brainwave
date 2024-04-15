// this is roadmap
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
// import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import TagLine from "./TagLine";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we are working on" />

        {/* this div will act as a container for all roadmaps */}
        <div className="relative grid gp-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div className="" key={item.id}>
                <div className="">
                  <div className="">
                    <img
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                      src={grid}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between">
                      <TagLine>{item.date}</TagLine>
                      <div>
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt={status}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
