import { useEffect, useState } from "react";
import * as S from "./Style";

export const Main = () => {
  const [isParalelo, setIsParalelo] = useState<boolean>(false);
  const [posx1, setPosx1] = useState<number>(0);
  const [posx2, setPosx2] = useState<number>(0);
  const [posy1, setPosy1] = useState<number>(0);
  const [posy2, setPosy2] = useState<number>(0);

  const paralelos = (x1: number, y1: number, x2: number, y2: number) => {
    let resultx = x1 / x2;
    let resulty = y1 / y2;
    if (resultx == resulty) {
      setIsParalelo(true);
      console.log("é paralelo", "x: ", resultx, "y: ", resulty);
    } else {
      setIsParalelo(false);
      console.log("nao é paralelo", "x: ", resultx, "y: ", resulty);
    }
  };

  return (
    <S.Main>
      <S.Title>Vetores Paralelos e Ortogonais</S.Title>
      <div>
        <p>x1:</p>
        <input
          type="number"
          onChange={(event) => {
            setPosx1(Number(event.target.value));
          }}
        />
        <p>y1:</p>
        <input
          type="number"
          onChange={(event) => {
            setPosy1(Number(event.target.value));
          }}
        />
        <p>x2:</p>
        <input
          type="number"
          onChange={(event) => {
            setPosx2(Number(event.target.value));
          }}
        />
        <p>y2:</p>
        <input
          type="number"
          onChange={(event) => {
            setPosy2(Number(event.target.value));
          }}
        />
        <button
          type="submit"
          onClick={() => {
            paralelos(posx1, posy1, posx2, posy2);
          }}
        >
          ------
        </button>
      </div>
    </S.Main>
  );
};
