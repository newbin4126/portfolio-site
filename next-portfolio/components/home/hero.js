import Projects from "@/pages/project";
import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          유빈이포폴
          <br className="hidden lg:inline-block" />
          하루아귀여워
        </h1>
        <p className="mb-8 leading-relaxed">
          본명 최찬희 (崔燦喜[훈음], Choi Chanhee) 출생 1998년 4월 26일 (25세)
          전라북도 전주시 덕진구 송천동[2] (現 전북특별자치도 전주시 덕진구
          송천동) 국적 대한민국 국기 대한민국 본관 삭녕 최씨 (朔寧 崔氏) 신체
          178cm｜250mm｜B형 가족 부모님, 형(1988년생) 학력 전주송원초등학교
          (졸업) 전주용소중학교 (졸업) 완주고등학교 (졸업) 종교 개신교 소속사
          IST엔터테인먼트 소속 그룹 더보이즈 포지션 메인보컬
        </p>
        <div className="flex justify-center">
          <Link href="/project" passHref>
            <div className="btn-project">프로젝트 보러가기</div>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
