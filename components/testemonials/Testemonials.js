import { useState } from "react";
import {
    TestemonialsContainer,
    TestemonialsContent,
    TestemonialsWrapper,
    TestemonialsClient,
    TestemonialsAvatar,
    TestemonialsContentContainer,
    ClientName,
    CallToAction,
} from "./TestemonialsElements";
import Avatar from "@material-ui/core/Avatar";

const Testemonials = () => {
    const [active, setActive] = useState(false);
    const testemonialsContainerVariant = {
        hidden: {
            width: "75px",
            borderRadius: "999px",
            height: "75px",
        },
        visable: {
            width: "100%",
            minHeight: "45vh",
            x: 0,
            borderRadius: 0,
            transition: {
                speed: 0.5,
            },
        },
    };

    const testemonialsContentVariants = {
        hidden: {
            opacity: 0,
        },
        visable: {
            opacity: 1,

            transition: {
                delay: 0.5,
                stifnes: 800,
            },
        },
    };

    const callToActionVatiants = {
        hidden: {
            opacity: 1,
        },
        visable: {
            opacity: 0,
        },
    };
    return (
        <TestemonialsWrapper>
            <CallToAction
                variants={callToActionVatiants}
                initial="hidden"
                animate={`${active ? "visable" : "hidden"}`}
            >
                Kliknij mnie
            </CallToAction>
            <TestemonialsContainer
                onClick={() => setActive(true)}
                variants={testemonialsContainerVariant}
                initial="hidden"
                animate={`${active ? "visable" : "hidden"}`}
                style={{ cursor: "pointer" }}
            >
                <TestemonialsContentContainer
                    variants={testemonialsContentVariants}
                    initial="hidden"
                    animate={`${
                        active ? "visable" : "hidden"
                    }`}
                >
                    <TestemonialsContent>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nullam
                        lobortis sapien vel urna venenatis
                        commodo. Nam semper non nunc et
                        molestie. Morbi eu lorem feugiat,
                        hendrerit ex nec, laoreet nisl.
                        Aenean ac risus lobortis, hendrerit
                        velit a, auctor ligula.
                    </TestemonialsContent>
                    <TestemonialsClient>
                        <TestemonialsAvatar>
                            <Avatar
                                src="images/testemonials.jpg"
                                sizes="large"
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    border: "3px dashed white",
                                }}
                            />
                        </TestemonialsAvatar>
                        <ClientName>Julia M.</ClientName>
                    </TestemonialsClient>
                </TestemonialsContentContainer>
            </TestemonialsContainer>
        </TestemonialsWrapper>
    );
};

export default Testemonials;
