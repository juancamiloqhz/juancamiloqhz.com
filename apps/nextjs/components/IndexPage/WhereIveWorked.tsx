import React from 'react';
import { motion } from 'framer-motion';
import { CgShapeTriangle } from 'react-icons/cg';

export default function WhereIveWorked() {
  const [active, setActive] = React.useState(1);
  return (
    <motion.div
      className="px-8 md:px-28 transition-all duration-500 ease-in-out mb-32 sm:mb-60 scroll-mt-60"
      id="experience"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center mb-6">
          <h2 className="text-2xl font-bold ">
            <span className="text-primary font-normal text-xl mr-1">02.</span>{' '}
            Where I've Work
          </h2>
          <div className="w-full h-[1px] bg-base-content/60" />
        </div>
        <div className="grid sm:grid-cols-[auto_1fr] gap-4">
          {/* Places List Large Screens */}
          <ul className="w-36 relative hidden sm:block">
            <li>
              <button
                className={`border-l-2 border-base-content/20 w-full text-left px-4 h-12 cursor-pointer hover:bg-primary/10 hover:text-primary text-sm${
                  active === 1 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(1)}
              >
                Vibra
              </button>
            </li>
            <li>
              <button
                className={`border-l-2 border-base-content/20 w-full text-left px-4 h-12 cursor-pointer hover:bg-primary/10 hover:text-primary text-sm${
                  active === 2 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(2)}
              >
                Freelancer
              </button>
            </li>
            <li>
              <button
                className={`border-l-2 border-base-content/20 w-full text-left px-4 h-12 cursor-pointer hover:bg-primary/10 hover:text-primary text-sm${
                  active === 3 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(3)}
              >
                Supernova
              </button>
            </li>
            <motion.div
              className="absolute w-[2px] bg-primary h-12 left-0 top-0"
              initial={{ y: 0 }}
              animate={{ y: 48 * (active - 1) }}
              transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
            />
          </ul>
          {/* Places List Smalls Screens */}
          <ul className="relative flex sm:hidden overflow-x-auto no-scrollbar">
            <li>
              <button
                className={`border-b-2 border-base-content/20 w-28 px-4 h-12 cursor-pointer hover:bg-primary/10 hover:text-primary text-sm${
                  active === 1 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(1)}
              >
                Vibra
              </button>
            </li>
            <li>
              <button
                className={`border-b-2 border-base-content/20 w-28 px-4 h-12 cursor-pointer hover:bg-primary/10 hover:text-primary text-sm${
                  active === 2 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(2)}
              >
                Freelancer
              </button>
            </li>
            <li>
              <button
                className={`border-b-2 border-base-content/20 w-28 px-4 h-12 cursor-pointer hover:bg-primary/10 hover:text-primary text-sm${
                  active === 3 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(3)}
              >
                Supernova
              </button>
            </li>
            <motion.div
              className="absolute h-[2px] bg-primary w-28 left-0 bottom-0"
              initial={{ x: 0 }}
              animate={{ x: 112 * (active - 1) }}
              transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
            />
          </ul>
          <div className="pt-2">
            {active === 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Co-Founder & CTO <span className="text-primary">@</span>{' '}
                  <a
                    className="link link-primary"
                    href="https://vibra.la"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Vibra
                  </a>
                </h3>
                <p className="text-base-content/60 text-sm">
                  Dec 2019 - Present
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                </ul>
              </div>
            )}
            {active === 2 && (
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Freelancer Full Stack Developer
                </h3>
                <p className="text-base-content/60 text-sm">
                  Jan 2016 - Dec 2019
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                </ul>
              </div>
            )}
            {active === 3 && (
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Owner <span className="text-primary">@</span>{' '}
                  <a
                    className="link link-primary"
                    href="https://www.youtube.com/watch?v=a4SC9yAnXok"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Supernova Fireworks
                  </a>
                </h3>
                <p className="text-base-content/60 text-sm">
                  Jan 2011 - Jul 2016
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatem corrupti nisi pariatur minus
                      consequuntur tempore cumque id ex?
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
