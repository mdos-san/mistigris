type Props = {
  children: React.ReactNode;
};

function Modal({ children }: Props) {
  return <div className="modal">{children}</div>;
}

export default Modal;
