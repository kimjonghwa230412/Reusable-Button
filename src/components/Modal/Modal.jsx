import React, { useState } from "react";
import * as S from "./modalstyle"

const Modal = () => {
  const [firstModal, setFirstModal] = useState(false)
  const [secondModal, setSecondModal] = useState(false)

  const onFirstModal = () => {
    setFirstModal(!firstModal)
  }

  const onSecondModal = () => {
    setSecondModal(!secondModal)
  }

  const onOverlayClick = () => {
    setFirstModal(true)
  };

  return (
    <div>
        <h1>Modal</h1>
        <S.FirstButton onClick={onFirstModal}>
          Open
        </S.FirstButton>
        <S.SecondButton onClick={onSecondModal}>
          open
        </S.SecondButton>
      {firstModal && (
        <S.Modaldiv>
          <S.Overlaydiv onClick={onOverlayClick}></S.Overlaydiv>
          <S.Modalcontentdiv>
            <h4>리액트를 배웁시다</h4>
            <S.CloseModalbutton onClick={onFirstModal}>닫기</S.CloseModalbutton>
            <S.ConfirmModalbutton>확인</S.ConfirmModalbutton>
          </S.Modalcontentdiv>
        </S.Modaldiv>
      )}
      {secondModal && (
        <S.Modaldiv>
          <S.Overlaydiv onClick={onSecondModal}></S.Overlaydiv>
          <S.Modalcontentdiv>
            <h4>리액트를 배웁시다</h4>
            <S.CloseModalbutton onClick={onSecondModal}>닫기</S.CloseModalbutton>
            <S.ConfirmModalbutton>확인</S.ConfirmModalbutton>
          </S.Modalcontentdiv>
        </S.Modaldiv>
      )}
    </div>
  );
}

export default Modal