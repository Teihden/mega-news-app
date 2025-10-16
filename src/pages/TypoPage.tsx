import type { FC } from "react";
import { Section } from "@shared/ui/Section";

/**
 *
 */
export const TypoPage: FC = () => {
  return (
    <>
      <Section>
        <h1>TypoPage</h1>
      </Section>
      <Section
        headerSlot={"Header"}
        footerSlot={"Footer"}
      >
        TEST 2
      </Section>
      <Section>
        TEST 3
      </Section>
    </>
  );
};
