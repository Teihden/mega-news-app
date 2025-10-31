import styled from "styled-components";
import { Btn } from "@shared/ui/Btn";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  position: relative;
  display: block;

  ${Btn.Btn} {
    position: absolute;
    inset: 0 0 0 auto;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.palette.secondary["100"]};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.16;

  &:not(:empty) {
    margin-block: .75rem 0;
  }
`;
