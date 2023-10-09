/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useState } from "react";
import { clsx } from "clsx";
import { CloseCircleFilled } from "@ant-design/icons";
import styles from "./header.module.css";
import { Badge, Modal, Popover } from "antd";


function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();
  // const loginStatus = localStorage.getItem("login");
  const handleIconClick = () => {
    alert("icon");
  };

  const handleModeClose = () => {
    setModalContent(<></>);
    setModalOpen(false);
  };
  const handleRegisterOpen = () => {
    setModalContent(
      'dangky'
    );
  };
  const handleLoginOpen = () => {
    setModalContent(
      'login'
    );
    setModalOpen(true);
  };


  const handleModalOpen = () => {
    handleLoginOpen();
  };


  return (
    <div className={styles.headers}>
      <header className={styles.header}>
        <div className={styles.right__header_container}>
          <div
            className={clsx(styles.header_icon, styles.icon__container)}
            onClick={handleIconClick}
          >
            <img
              src="/image/ming.jpg"
              alt="tikiLogo"
            />
          </div>


        </div>
        <div className={styles.center_header_container}>
            <CloseCircleFilled />
        </div>
        <div className={styles.left__header_container}>
          <div className={styles.header__account} onClick={handleModalOpen}>
            <img
              src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
              alt="account icon"
            />
            login
          </div>
          <Modal
            // title="Login"
            open={modalOpen}
            onOk={handleModeClose}
            onCancel={handleModeClose}
            width={820}
            footer={[]}
            centered
            zIndex={5}
          >
            {modalContent}
          </Modal>
          <div className={styles.header__home} onClick={handleIconClick}>
            <img
              src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
              alt="home icon"
            />
            trang chủ
          </div>
          <div className={styles.header__cart}>
            <Popover content={<></>} trigger="click">
              <Badge count={0} showZero>
                <img
                  src=" https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
                  alt="cart Icon"
                />
              </Badge>
            </Popover>
          </div>
        </div>
      </header>
    </div>
  );
}


export default Navbar;