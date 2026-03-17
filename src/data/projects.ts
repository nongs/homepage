export type ProjectItem = {
  title: string
  role: string
  year: number
  skill: string
  desc: string
  cover: string
  link: string
}

export const projects: ProjectItem[] = [
  {
    title: '반카 리뉴얼',
    role: 'Frontend, API',
    year: 2023,
    skill: 'React, Next.js, PHP',
    desc: '기존 PHP + AngularJs 환경의 홈페이지에 AngularJS 및 복잡한 파일구성등의 유지보수에 대한 어려움이 있어 React + Next.js 환경으로 리뉴얼 진행',
    cover: '/images/vancar.png',
    link: 'https://www.vancar.kr/',
  },
  {
    title: '반카 파트너스',
    role: 'Frontend, API',
    year: 2021,
    skill: 'React, PHP',
    desc: '상품 공급업체를 위한 상품 관리 홈페이지로 React를 사용하여 개발 진행. 필요한 API는 PHP에서 작성하여 연결',
    cover: '/images/vancar-partners.png',
    link: 'https://partners.vancar.kr/',
  },
  {
    title: '박차 리뉴얼',
    role: 'Frontend, API',
    year: 2020,
    skill: 'AngularJS, PHP',
    desc: '기존 박차 사이트의 UI 변경 및 전체적인 검색 플로우 변경으로 인한 홈페이지 리뉴얼',
    cover: '/images/bakcha.png',
    link: 'https://biz.bakcha.com/',
  },
  {
    title: 'KISTI EDISON Coursebuilder',
    role: 'Frontend',
    year: 2018,
    skill: 'AngularJS',
    desc: 'EDISON 강의 저작도구 웹 프론트엔드 작업 진행',
    cover: '/images/edison_coursebuilder.jpg',
    link: '',
  },
  {
    title: 'GESTURE Coursebuilder',
    role: 'Frontend',
    year: 2018,
    skill: 'AngularJS',
    desc: 'LMS 강의 저작도구 웹 프론트엔드 작업 진행',
    cover: '/images/gesture_coursebuilder.jpg',
    link: '',
  },
  {
    title: 'IMOOVE2 Coursebuilder',
    role: 'Frontend',
    year: 2017,
    skill: 'AngularJS',
    desc: 'MOOC 강의 저작도구 웹 프론트엔드 작업 진행',
    cover: '/images/imoove2_coursebuilder.jpg',
    link: '',
  },
]

