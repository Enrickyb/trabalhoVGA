import { useEffect, useState } from "react";
import * as S from "./Style";

export const Main = () => {
  const [r3, setR3] = useState<boolean>(false);
  const [submited, setSubmited] = useState(false);

  const [paralelo, setParalelo] = useState(false);
  const [isOrtogonal, setIsOrtogonal] = useState<boolean>(false);

  //Cordenada X
  const [posx1, setPosx1] = useState<number>(null);
  const [posx2, setPosx2] = useState<number>(null);
  //Cordenada Y
  const [posy1, setPosy1] = useState<number>(null);
  const [posy2, setPosy2] = useState<number>(null);
  //Cordenada Z
  const [posz1, setPosz1] = useState<number>(null);
  const [posz2, setPosz2] = useState<number>(null);
  
  function clearAll(){
    setPosx1(null);
    setPosx2(null);
    setPosy1(null);
    setPosy2(null);
    setPosz1(null);
    setPosz2(null);
    setParalelo(false);
    setIsOrtogonal(false);
    setSubmited(false);
  }

  const submit = () => {
    if (posx1 || posx2 || posy1 || posy2 || posz1 || posz2) {
      setSubmited(true);
    } else {
      setSubmited(false);
    }
  };

  function ortogonais(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    z1: number | null,
    z2: number | null
  ) {
    let result = x1 * x2 + y1 * y2 + z1 * z2;

    if (result == 0) {
      console.log("É ortogonal, pois o produto escalar dos vetores é 0");
      setIsOrtogonal(true);
    } else {
      console.log("Não é ortogonal");
      setIsOrtogonal(false);
    }
  }

  function paralelos(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    z1: number | null,
    z2: number | null
  ) {
    let resultx = x1 / x2;
    let resulty = y1 / y2;

    if (r3 == true) {
      let resultz = z1 / z2;

      if (resultx === resulty && resulty === resultz) {
        console.log("É paralelo");
        setParalelo(true);
      } else {
        setParalelo(false);
        console.log("Não é paralelo");
      }
    } else {
      if (resultx == resulty) {
        console.log("É paralelo");
        setParalelo(true);
      } else {
        setParalelo(false);
        console.log("Não é paralelo");
      }
    }
  }

  return (
    <S.Main>
      <S.Title>Vetores Paralelos e Ortogonais</S.Title>
      <button
        onClick={() => {
          setR3(!r3);
        }}
      >
        {r3 ? "2D" : "3D"}
      </button>
      <S.Forms>
        <p>U: </p>
        (
        <input
          type="number"
          onChange={(event) => {
            setPosx1(Number(event.target.value));
          }}
        />
        ,
        <input
          type="number"
          onChange={(event) => {
            setPosy1(Number(event.target.value));
          }}
        />
        {r3 ? (
          <div>
            ,
            <input
              type="number"
              onChange={(event) => {
                setPosz1(Number(event.target.value));
              }}
            />
          </div>
        ) : null}
        )<p>V: </p>
        (
        <input
          type="number"
          onChange={(event) => {
            setPosx2(Number(event.target.value));
          }}
        />
        ,
        <input
          type="number"
          onChange={(event) => {
            setPosy2(Number(event.target.value));
          }}
        />
        {r3 ? (
          <div>
            ,
            <input
              type="number"
              onChange={(event) => {
                setPosz2(Number(event.target.value));
              }}
            />
          </div>
        ) : null}
        )
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submit();
            paralelos(posx1, posy1, posx2, posy2, posz1, posz2);
            ortogonais(posx1, posy1, posx2, posy2, posz1, posz2);
            
          }}
        >
          Verificar
        </button>
        <button onClick={
          ()=>{
            clearAll();
          }
        }>Limpar</button>
      </S.Forms>
      {submited ? (
        <div>
          <div>
            {paralelo ? (
              <p>Os vetores são Paralelos</p>
            ) : (
              <p>Os vetores não são Paralelos</p>
            )}
          </div>

          <div>
            {isOrtogonal ? (
              <p>Os vetores são Ortogonais</p>
            ) : (
              <p>Os vetores não são Ortogonais</p>
            )}
          </div>
        </div>
      ) : null}
    </S.Main>
  );
};
