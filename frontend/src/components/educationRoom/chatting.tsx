interface chatProps {
  nickname: string;
  data: string;
}

const Chatting = ({ nickname, data }: chatProps) => {
  return (
    <div>
      <div>
        <span>{nickname}</span> : <span>{data}</span>
      </div>
    </div>
  );
};

export default Chatting;
