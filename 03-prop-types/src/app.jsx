import Button from "@/components/button";
import LinkButton from "@/components/link-button";

function App() {
  const handleLogin = (text) => () => {
    alert(`${text} 버튼 클릭`);
  };

  return (
    <>
      <Button
        className="fill"
        type="submit"
        onClick={handleLogin("로그인")}
        label="로그인"
      />
      <LinkButton className="stroke" href="#" label="회원가입" />
    </>
  );
}

export default App;
