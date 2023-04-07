# MATHEDU

학생 성적 관리 시스템

## 🖥️ : 프로젝트 개요

학원에서 쓰이는 LMS 프로그램으로
공지사항 및 자료실 CRUD와 PDF 다운로드 및 업로드 기능.
학생과 선생은 학생 개개인의 성적을 그래프로 조회할 수 있으며
시험 성적을 등록과 수정 가능하고 시험별로 점수분포도 및 반 평균을 차트로 조회가능 
LMS기본적인 기능을 구현하였다.

#### 타겟

학원용 LMS 프로그램

## 🕰️ 프로젝트 기간

- 23.03.15 - 23.04.05 

### 🧑‍🤝‍🧑 멤버구성
- 프론트엔드 팀장 : 반재원 - git 관리 / 컴포넌트 구성 / 레이아웃 제작 / 사이드헤더 / 로그인 / 자료실 CRUD / 공지사항 CRUD / 학생 등록 /   
- 프론트엔드 팀원1 : 오한수 - 클래스 리스트 및 상세정보 / 반별 학생 리스트 / 시험 리스트 / 시험 상세 정보 / 점수 등록,수정 / 시험별 성적 차트 / 피그마 작업
- 프론트엔드 팀원2 : 최금옥 -
 
### 🎥 시연영상

<img src="https://user-images.githubusercontent.com/118712217/223914798-38874fe7-8907-4924-81ac-24cd7199e208.mp4" width="300" height="600"/>

### 💻 사용 기술
- `Html` 
- `Css` : styled-components
- `JavaScript`
- `React` 
- 'typescript'
- **Libraries** : redux-toolkit / 

### 📅 프로젝트 관리
- GitHub
- Slack
- Figma
- Swagger
##   주요 기능
#### 로그인 화면 
-학생 로그인, 선생님 로그인
-학생 비밀번호 수정 기능
### 선생님 페이지 
####클래스
- 선생님이 맡은 클래스 리스트 조회
- 클래스별 학생 리스트 조회 , 반 정보 확인 및 , 시험 리스트 조회
- 시험 리스트 정렬 / 시험 생성
- 시험 디테일에서 학생들 점수 입력 / 분포도 및 평균 차트 확인
#### 자료실 및 공지사항
- 자료실 및 공지사항 CRUD
- REACT-QUILL을 이용한 게시판 작성
- 반 별로 카테고리 설정 가능하여, 학생은 본인의 반에 등록된 자료실과 공지사항만 확인 가능
- PDF 업로드 및 다운로드 가능
#### 학생 등록
- 학생을 등록하고 비밀번호 자동 생성
###학생 페이지
####성적 조회
- 자신의 성적을 주간 및 월 별로 조회 기능
####자료실 및 공지사항
- 자신이 속한 자료실과 공지사항 조회 기능
- PDF 다운
####마이페이지
- 자신의 회원정보 조회
- 비밀번호 변경 기능

<br/>
\*\* 본 readme는 프론트엔드의 입장에서만 작성되었습니다.