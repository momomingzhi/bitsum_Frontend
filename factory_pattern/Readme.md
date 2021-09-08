<!-- @format -->

# 디자인 패턴 - Factory 패턴 타입스크립트로 하기

# 팩토리 패턴

-   생성 패턴(인스턴스를 만드는 절차를 추상화하는 패턴)중 하나
-   생성 패턴에 속하는 패턴들은 객체를 생성,합성하는 방법이나 객체의 표현 방법을 시스템과 분리해준다
-   시스템이 상속보다 복합(composite)방법을 사용하는 방향으로 진화되어 가면서 더 중요해지고 있다
-   팩토리 패턴은 객체를 생성하는 인터페이스는 미리 정의하되, 인스턴스를 만들 클래스의 결정은 서브 클래스 쪽에서 내리는 패턴
-   여러개의 서브 클래스를 가지 ㄴ슈퍼 클래스가 있을 때 인풋에 따라 하나의 자식 클래스의 인스턴스를 리턴해주는 방식
-   공장이라고 생각하면 편함! 하나의 클래스나 객체 생성하는데 쓰이며 주요로 사용되는 것은 `추상팩토리` 와 `팩토리 매서드` 패턴

## 팩토리 메서드 패턴

-   부모 클래스에서 타입에 따라 클래스를 생성하는 방법
-   자식 클래스를 생성하는 상황에서 부모 클래스의 팩토리를 호출하여 생성해주는 방식으로 처리
-   클래스 생성에 대해 파편화 막아주며 자식 클래스가 늘어나는 상황에서 효과적으로 코드 수정할 수 있게 해줌
    ![팩토리](https://user-images.githubusercontent.com/47150127/132459800-5c7ab99d-73f7-4d2d-ad13-24b4465de832.PNG)

추상화된 RocketFactory와 Rocket있고 이를 상속하는 FastRactoryRocketFactory와 FastRocket 클래스 있다.
로켓을 어떻게 만드는지와 로켓은 어떤 부품을 가지고 있는지 일반적인 것들은 추상 클래스에 정의 하고 이를 활용해 구체적인 팩토리와 로켓 생산

# typescript 환경 설정

```
$ mkdir ts-practice
$ cd ts-practice
$ yarn init -y # 또는 npm init -y

```

디렉터리에 package.json 파일 생성됨!

타입스크립트 설치하기

```
$ yarn global add typescript # 또는 npm install -g typescript
$ tsc --init # 또는 npx tsc --init
```

tsconfig.json 파일 구성

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  }
}
```

tsc 명령어 이용해 컴파일 하기

```
$ tsc

# or, for local tsc:
$ npx tsc
```

import, export 모듈화를 진행 할 경우 웹팩과 모듈 번들러를 함께 설치해야함

```
$ npm install -D typescript parcel-bundler
```

Parcel 번들러로 빌드해주기

```
$ npx parcel index.html
```
