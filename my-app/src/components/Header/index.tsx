import Link from "next/link";
import * as S from "./style";

export default function Header() {
  return (
    <S.Header>
      <Link href={"/"}>
        <img src="/logo.png" alt="logo" />
      </Link>
      <Link href={"/"}>
        <h1>VETORES E GEOMETRIA ANALÍTICA</h1>
      </Link>
    </S.Header>
  );
}
