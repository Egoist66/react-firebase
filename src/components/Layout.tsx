import {FC} from "react";
import {AppRoutes} from "./AppRoutes.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1290px;
  padding: 0 20px;
  margin: 0 auto;

`
const Section = styled.section`
  padding: 90px 0px;
`

export const Layout: FC = () => {
    return (
        <Section>
            <Wrapper>

                <AppRoutes/>

            </Wrapper>
        </Section>
    )
}