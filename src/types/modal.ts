export type Modal = "post";

export type ModalStatus = {
  isShow: boolean;
  otherParams?: { [key: string]: any };
};

export type ModalProps = {
  closeFunc: () => void;
  data: { [key: string]: any; otherParams?: { [key: string]: any } };
};
