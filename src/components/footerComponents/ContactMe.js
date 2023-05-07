import { Mail } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";
import { BodyTitle, Text, TitleText } from "../bodyComponents/Body";

const ContanctMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const ContactMeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
    margin-right: 16px;
  }
`;

const MessageTextBox = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 0.5rem;
  outline-color: ${Colors.primary};
  font-weight: 500;
  color: ${Colors.bg};
  margin-bottom: 16px;
  border-radius: 8px;
`;

const UserMailInput = styled.input`
  border-radius: 8px;
  margin-bottom: 16px;
  color: ${Colors.bg};
  padding: 0.5rem;
  width: 100%;

  outline-color: ${Colors.primary};
`;

const mailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const ContactMe = () => {
  const [mailContent, setMailContent] = useState("");
  const [userMailId, setUserMailId] = useState("");

  const verifyInputs = () => {
    if (!mailPattern.test(userMailId) || !mailContent === "") return false;
    return true;
  };

  const sendMail = async () => {
    if (!verifyInputs()) {
      alert("Inavlid Inputs");
      return;
    }
    const res = await fetch(
      "https://raghavsharma13.pythonanywhere.com/api/send_mail",
      {
        method: "Post",
        body: JSON.stringify({
          user_mail: userMailId,
          message: mailContent,
        }),
      }
    );
    setMailContent("");
    setUserMailId("");
    console.log(res);
  };
  return (
    <ContanctMeWrapper>
      <BodyTitle>
        <TitleText>Contact Me</TitleText>
      </BodyTitle>
      <ContactMeBody>
        <InputWrapper>
          <UserMailInput
            type={"email"}
            required={true}
            placeholder="abc@example.com"
            value={userMailId}
            onChange={(e) => setUserMailId(e.target.value)}
          />
          <MessageTextBox
            required={true}
            placeholder="Leave a message..."
            value={mailContent}
            onChange={(e) => setMailContent(e.target.value)}
          />
        </InputWrapper>
        <IconButton className="SendMail" onClick={sendMail}>
          <Mail className="MailIcon" />
          <Text>Send</Text>
        </IconButton>
      </ContactMeBody>
    </ContanctMeWrapper>
  );
};

export default ContactMe;
