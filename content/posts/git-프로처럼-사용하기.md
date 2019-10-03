---
title: "Git: 프로처럼 사용하기"
date: 2019-10-03T21:08:00+09:00
draft: false
tags:
  - Git
toc: true
isCJKLanguage: true
---

안녕하세요? 곰프로입니다.

오늘은 Git을 좀 더 효과적으로 사용하기 위한 여러가지 팁을 알려드리려고 합니다.

만약 Git이 무엇인지 모르거나 Git을 사용해본 경험이 없다면 Git 설치부터 간단한 작업을 위한 명령어를 소개하는 [git-간편안내서](https://rogerdudler.github.io/git-guide/index.ko.html)를 먼저 봐주세요.

## 1. 상황별 커맨드라인 명령어 알아두기

개발자, 특히 백엔드 개발자는 커맨드라인을 활용해서 작업을 하는 일이 많습니다. Git을 이용한 작업도 예외는 아니죠. 오늘은 커맨드라인을 통해서 가능한 작업들을 알아보겠습니다.

### 파일 스테이징

Git에서 파일을 스테이징하는 명령어는 `git add` 입니다. 여느 명령어와 마찬가지로 `git add --help`를 입력하면 여러가지 옵션을 볼 수 있는데요, 이 중에서 가장 유용한 두 가지는 `-A, --all`과 `-i, --interactive` 입니다.

`-A, --all` 옵션을 주게 되면 한 번에 스테이지 되지 않은 모든 파일을 추가할 수 있습니다. `git add 특정 파일`을 여러 번 입력하지 않아도 되는 거죠.

`-i, --interactive` 옵션은 조금 생소할 수 있습니다. 이 옵션은 여러 파일을 변경했을 때 원하는 파일만을 추가할 수 있게 대화형 프로그램을 시작하는 옵션입니다. 한 번 실제 사용 예시를 살펴봅시다.

`git add -i`를 실행하면 아래와 같은 화면이 나옵니다.

![Screen Shot 2019-10-03 at 5.59.24 PM.png](https://images.velog.io/post-images/leejh3224/1dc23530-e5bc-11e9-9294-3dd962573780/Screen-Shot-2019-10-03-at-5.59.24-PM.png)

여기서 원하는 작업의 번호 혹은 앞글자를 누르면 작업을 계속 진행합니다.

저는 `a.txt`라는 파일을 추가하고 싶으므로 `add untracked`의 앞글자인 `a`를 누르겠습니다.

![Screen Shot 2019-10-03 at 6.01.01 PM.png](https://images.velog.io/post-images/leejh3224/59400150-e5bc-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-6.01.01-PM.png)

이제 트래킹되지 않고 있는 파일을 추가할 수 있습니다. 계속해서 `a.txt` 앞에 적힌 번호를 입력해주면 파일이 추가 가능한 상태가 됩니다.

![Screen Shot 2019-10-03 at 6.02.14 PM.png](https://images.velog.io/post-images/leejh3224/82281cb0-e5bc-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-6.02.14-PM.png)

1을 입력하면 리스트에서 해당 파일 앞에 * 표시가 생기는데 이때 한 번 더 엔터를 입력하면 파일이 추가됩니다.

이 단계에서 현재 상태를 확인하고 싶다면 1 혹은 s를 누르면 됩니다.

![Screen Shot 2019-10-03 at 6.03.46 PM.png](https://images.velog.io/post-images/leejh3224/b9816c70-e5bc-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-6.03.46-PM.png)

`a.txt`가 정상적으로 스테이징된 것을 알 수 있습니다.

![Screen Shot 2019-10-03 at 6.05.07 PM.png](https://images.velog.io/post-images/leejh3224/e996fe70-e5bc-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-6.05.07-PM.png)

아까와 비슷한 방법으로 3 혹은 r을 누르게 되면 이미 추가한 파일을 되돌릴 수도 있습니다.

마지막으로 7 혹은 q를 입력하면 Bye. 라는 문구와 함께 프로그램이 종료됩니다.

![Screen Shot 2019-10-03 at 6.06.42 PM.png](https://images.velog.io/post-images/leejh3224/2274cb50-e5bd-11e9-9294-3dd962573780/Screen-Shot-2019-10-03-at-6.06.42-PM.png)

### 다른 브랜치에서 원하는 커밋만 가져오기

혼자 작업을 하는 경우에는 굳이 브랜치를 나누거나 할 일이 많지 않습니다. 하지만 여러 사람과 같이 개발을 하다보면 브랜치를 자주 사용하게 됩니다. 

이 경우 브랜치A에 브랜치B의 작업 내용을 가져와야 하는데 merge를 하기가 망설여지거나 혹은 merge가 불가능한 상황이라면 `cherry-pick`을 사용할 수 있습니다.

`cherry-pick`이라는 이름에서도 알 수 있듯이 이 명령어는 해당 브랜치의 커밋을 내 브랜치의 작업 내용인 것처럼 복사해줍니다. 

이를 위해 저는 `dev` 브랜치를 만들어두고 커밋도 하나 생성했습니다.

![Screen Shot 2019-10-03 at 6.15.04 PM.png](https://images.velog.io/post-images/leejh3224/4d77e200-e5be-11e9-9294-3dd962573780/Screen-Shot-2019-10-03-at-6.15.04-PM.png)

이 경우 마스터 브랜치에도 해당 작업 내용이 필요할 때 이 커밋을 `cherry-pick`할 수 있습니다. 

먼저 해당 커밋의 id (54f915f8a7b0f3898dd187d52f1745c47118fafe)를 어딘가에 복사해둡니다. 그 다음 마스터 브랜치로 넘어가서 `git cherry-pick 54f915f8a7b0f3898dd187d52f1745c47118fafe` 명령어를 입력합니다.

![Screen Shot 2019-10-03 at 6.17.48 PM.png](https://images.velog.io/post-images/leejh3224/ae5788f0-e5be-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-6.17.48-PM.png)

마스터 브랜치에도 같은 내용의 커밋이 생성되었습니다! 이 경우 해당 커밋은 `dev` 브랜치와는 다른 커밋 id를 가지게 되는데요, 이는 해당 커밋이 "이동"된 것이 아닌 "복사"되었기 때문입니다.

### 현재 작업 내용 임시 저장 및 불러오기

코드를 수정하다가 브랜치를 변경해야될 때 지금까지 작업하던 내용을 임시 저장할 수는 없을까요?

첫 번째 명령어는 `git stash` 입니다.

`stash`는 현재 브랜치에서 커밋 되지 않은 작업 내용을 임시 저장하는 명령어입니다. 실제로 한 번 사용해볼까요?

![Screen Shot 2019-10-03 at 7.05.49 PM.png](https://images.velog.io/post-images/leejh3224/67ee9dc0-e5c5-11e9-9294-3dd962573780/Screen-Shot-2019-10-03-at-7.05.49-PM.png)

`a.txt` 파일에 위와 같이 한 줄을 추가했습니다.

그 다음 `git stash` 혹은 `git stash push`를 입력하면 

![Screen Shot 2019-10-03 at 7.18.46 PM.png](https://images.velog.io/post-images/leejh3224/33e04860-e5c7-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-7.18.46-PM.png)

위와 같은 메세지가 출력됩니다. (dev 브랜치에서 작업 중인 상태를 저장했습니다.)

`stash`된 작업 목록을 확인하려면 `git stash list`를 입력하면 됩니다.


![Screen Shot 2019-10-03 at 7.20.06 PM.png](https://images.velog.io/post-images/leejh3224/71b32810-e5c7-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-7.20.06-PM.png)


또 `stash`된 작업 목록을 현재 작업 중인 브랜치에 불러오려면 `git stash pop`을 입력하면 되는데요, 

![Screen Shot 2019-10-03 at 7.21.27 PM.png](https://images.velog.io/post-images/leejh3224/941900f0-e5c7-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-7.21.27-PM.png)

위와 같이 stash{0}번에 저장되어 있던 작업 목록이 제거된 것을 알 수 있습니다. (Dropped refs/stash@{0} (id))

만약 `stash`된 작업 내역이 여러 개라면 어떻게 원하는 내역을 불러올 수 있을까요?

`git stash apply`를 이용할 수 있습니다.

아까 작업목록을 확인했을 때 작업 목록의 이름이 stash@{0}와 같이 저장된 것을 보셨을 겁니다.

`stash`는 새 작업 내역이 추가될 때마다 인덱스 번호를 하나씩 추가하기 때문에 원하는 작업 내역의 인덱스 번호를 입력하면 손쉽게 원하는 내역만을 적용할 수 있습니다.

`git stash apply 0`를 하게 되면 아까 `git stash pop`을 한 것과 같은 일이 일어나죠.

### 추적되지 않는 파일 지우기

작업을 하다 보면 빌드 파일 혹은 이미지 파일 등을 실수로 ignore하지 않아 작업 내역과 같이 추가되는 경우가 있습니다.

이 경우 `git reset` 명령어를 이용해 먼저 혹여라도 스테이지된 모든 파일들을 스테이지 상태에서 제거하고 난 뒤,

`git clean` 명령어를 이용할 수 있습니다.

`git clean` 명령어는 특이하게도 옵션을 주지 않으면 실행할 수가 없습니다.

![Screen Shot 2019-10-03 at 7.36.01 PM.png](https://images.velog.io/post-images/leejh3224/9bcafef0-e5c9-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-7.36.01-PM.png)

이는 위험한 결과를 초래할 수 있는 명령어의 의도하지 않은 사용을 막아논 것입니다. (전체 삭제)

사용 가능한 옵션들을 살펴봅시다.

1번은 `-n` 입니다. 설명은 `dry run`이라고 되어있는데요, 그 말 그래도 `git clean` 명령어를 실행했을 때의 결과를 시뮬레이션 해줍니다.

저는 `b.txt`와 `c.txt` 파일을 추가한 뒤에 명령어를 한 번 실행해보겠습니다.

![Screen Shot 2019-10-03 at 7.38.03 PM.png](https://images.velog.io/post-images/leejh3224/e59a1b60-e5c9-11e9-9294-3dd962573780/Screen-Shot-2019-10-03-at-7.38.03-PM.png)

예상했던 결과가 나왔네요! 물론 dry run이기 때문에 파일을 지우지는 않습니다.

다음은 `git add`에서도 보셨던 `-i` 옵션입니다. 

`git add`와 같은 대화창이 나오면서 각각의 파일을 지울 수 있습니다. 

그 중에서 가장 자주 쓸만한 4번 ask each를 선택하게 되면 아래와 같이 Y 혹은 N으로 각각의 파일을 지울지 말지 선택할 수 있습니다.

![Screen Shot 2019-10-03 at 7.39.35 PM.png](https://images.velog.io/post-images/leejh3224/1c5fb6a0-e5ca-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-7.39.35-PM.png)

그 밖에 `-f` 명령어는 말 그대로 강제로 지우는 것이며, 디렉토리를 지우는 `-d`, `ignore`된 파일만 지우는 (`-X`) 혹은 `ignore`된 파일'도' 지우는 (`-x`)가 있습니다.

이 모든 옵션은 서로 조합해서 사용할 수 있습니다.

### 되돌리기

Git이 강력한 이유 중 하나는 언제든 이전 작업 내용으로 되돌아갈 수 있다는 점입니다. 파일을 백업해두거나 하지 않더라도 말이죠. 게다가 Git의 되돌아가기는 굉장히 강력해서 커밋 내역만 있다면 언제든 원하는 커밋으로 돌아갈 수 있습니다.

첫 번째는 가장 최근 커밋 수정하기입니다.

작업을 하다보면 커밋 메세지에 오타를 내거나 당장 같은 커밋으로 묶이지 말아야할 파일을 같이 커밋해버릴 때가 있습니다. 이 때 아직 이 커밋이 원격 저장소에 푸쉬되기 전이라면 `git commit --ammend`를 이용해 수정이 가능합니다.

![Screen Shot 2019-10-03 at 7.47.05 PM.png](https://images.velog.io/post-images/leejh3224/285dd2b0-e5cb-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-7.47.05-PM.png)

커밋 메세지에 오타를 내버렸네요!

바로 수정해봅시다.

배운대로 `git commit --ammend`를 수정하면 아래와 같은 화면이 나옵니다.

![Screen Shot 2019-10-03 at 7.47.59 PM.png](https://images.velog.io/post-images/leejh3224/49a913d0-e5cb-11e9-9294-3dd962573780/Screen-Shot-2019-10-03-at-7.47.59-PM.png)

여기서 `shitf + i`를 누르게 되면 화면 아래에 --INSERT--라는 문구가 생기면서 문구가 수정하게 됩니다.

![Screen Shot 2019-10-03 at 7.49.20 PM.png](https://images.velog.io/post-images/leejh3224/793a0c80-e5cb-11e9-bbd8-c76310c8661d/Screen-Shot-2019-10-03-at-7.49.20-PM.png)

저는 메세지를 mistake로 수정하고 수정을 마치겠습니다.

수정을 마칠 때는 --INSERT-- 상태에서 `esc` 키를 누른 뒤, 아래와 같이 `:wq`를 입력한 뒤 엔터를 치면 수정된 내용이 적용됩니다.

![Screen Shot 2019-10-03 at 7.51.14 PM.png](https://images.velog.io/post-images/leejh3224/bc0d70b0-e5cb-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-7.51.14-PM.png)

짜잔!

![Screen Shot 2019-10-03 at 7.52.21 PM.png](https://images.velog.io/post-images/leejh3224/e4c52d40-e5cb-11e9-adc8-77c29e30dd83/Screen-Shot-2019-10-03-at-7.52.21-PM.png)

이러한 방식은 리눅스 유저들에게 인기 있는 에디터인 `vim` 명령어를 사용한 것입니다. Git의 다른 명령어들 중에도 `vim` 에디터가 나오는 경우가 있으니 [기본적인 명령어](https://ttend.tistory.com/746) 정도는 알아놓으면 좋습니다.

두 번째는 스테이지되지 않은 작업 내용 되돌리기입니다.

조금 어렵게 들릴 수 있는 내용이지만 `git add`되지 않은 작업 내용을 삭제하는 명령어라고 생각하시면 됩니다.

`git checkout .` 혹은 `git checkout -- [filename]`

이 명령어를 입력하면 스테이지되지 않은 작업 내역이 사라지게 되며, 이는 `stash`와는 달리 다시 불러올 수 없습니다.

그러므로 위 명령어를 사용할 때는 조금 신중할 필요가 있습니다.

세 번째는 이전 커밋으로 돌아가기입니다.

아마도 가장 흔한 상황일 수 있는데요, 내 브랜치에서 작업을 하다가 작업을 하기 이전 커밋으로 돌아가고 싶을 때는 어떻게 해야 될까요?

정답은 이전에 `git clean`에서 사용했던 `git reset` 명령어를 사용하는 것입니다.

![Screen Shot 2019-10-03 at 7.56.47 PM.png](https://images.velog.io/post-images/leejh3224/82ee1180-e5cc-11e9-9294-3dd962573780/Screen-Shot-2019-10-03-at-7.56.47-PM.png)

`dev`에는 현재 두 개의 커밋이 존재합니다.

이 상황에서 한 번 `change from dev` 커밋으로 돌아가봅시다.

`git reset HEAD~1`을 입력하면 어떻게 될까요?

![Screen Shot 2019-10-03 at 8.02.24 PM.png](https://images.velog.io/post-images/leejh3224/4b8fc340-e5cd-11e9-b5e4-f972be559391/Screen-Shot-2019-10-03-at-8.02.24-PM.png)

`HEAD`는 이제 change from dev 커밋을 가리키고 있습니다.

또한 제가 mistake 커밋에서 추가했던 내용이 스테이지되지 않은 상태로 돌아갔습니다.

![Screen Shot 2019-10-03 at 8.03.15 PM.png](https://images.velog.io/post-images/leejh3224/69e766e0-e5cd-11e9-adc8-77c29e30dd83/Screen-Shot-2019-10-03-at-8.03.15-PM.png)

`reset`이 어떤 일들을 한 걸까요?

```
최초의 상황: HEAD 포인터가 mistake 커밋을 가리키고 있음
-- change from dev -- mistake (* -> HEAD)

git reset HEAD~1 // HEAD 포인터를 1커밋 이전으로 옮김

이후 상황: HEAD 포인터가 chagne from dev를 가리키고 있음
-- change from dev (* -> master)
```

위와 같이 `git reset`을 하게 되면 HEAD 포인터가 이동하면서 원하는 커밋으로 돌아갈 수 있게 됩니다.

특정 커밋으로 이동하고 싶다면 `cherry-pick`을 했을 때처럼 커밋 id를 같이 입력해주면 됩니다. (`git reset [commit id]`)

이어서 `git reset`에도 여러 옵션들이 있는데요, 가장 대표적인 것은 `--soft`와 `--hard`입니다.

먼저 같은 명령을 `--soft` 옵션을 줘서 다시 실행해봅시다.

![Screen Shot 2019-10-03 at 8.13.05 PM.png](https://images.velog.io/post-images/leejh3224/c9458170-e5ce-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-8.13.05-PM.png)

![Screen Shot 2019-10-03 at 8.13.18 PM.png](https://images.velog.io/post-images/leejh3224/d111a910-e5ce-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-8.13.18-PM.png)

옵션을 주지 않았을 때처럼 커밋은 가장 최근 커밋 하나 이전의 커밋으로 돌아갔습니다. 그런데 `a.txt`가 스테이지된 상태 그대로 커밋이 되돌아 갔습니다.

이는 `--soft` 옵션을 사용하게 되면 HEAD가 가리키는 커밋만 변경하고 작업 상태는 이전 그대로 두기 때문입니다. change from dev 커밋에게 mistake 커밋의 작업 내역이 추가되어 있다고 보면 되겠네요.

그러므로 `git commit`을 하게 되면 다시 이전 상태로 되돌아갑니다. (`git add`할 필요가 없는거죠!)

만약 `git reset --hard`를 실행하게 되면 어떻게 될 지 한 번 봅시다.

![Screen Shot 2019-10-03 at 8.17.29 PM.png](https://images.velog.io/post-images/leejh3224/6ec647b0-e5cf-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-8.17.29-PM.png)

![Screen Shot 2019-10-03 at 8.17.41 PM.png](https://images.velog.io/post-images/leejh3224/710b0790-e5cf-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-8.17.41-PM.png)

???

mistake 커밋에서 작업한 내역까지 모조리 사라져버렸네요?

그렇습니다. `--hard` 옵션은 HEAD 포인터를 이동시킬 뿐만 아니라 해당 커밋에서 작업하던 내역/스테이지되지 않은 변경사항 등까지 모조리 날려버리기 때문에 신중에 또 신중을 기해서 사용해야되는 것이죠.

그러므로 웬만한 경우에는  `--soft` 옵션을 사용하시고, 날려도 상관없는 내용이라면 `--hard`를 사용할 수 있습니다.

마지막은 원격 저장소에 푸쉬된 내용 되돌리기입니다.

모든 일과를 마치고서 `dev` 브랜치에서 이제까지 작업한 결과물을 원격 저장소로 푸쉬하고 퇴근할 준비를 합니다.

그런데 아뿔싸 mistake 커밋은 원격 저장소로 푸쉬되어서는 안 되는 커밋이었습니다.

어떻게 해야될까요?

`git revert`를 사용할 차례입니다.

먼저 `git revert HEAD`를 입력합니다.

![Screen Shot 2019-10-03 at 8.24.48 PM.png](https://images.velog.io/post-images/leejh3224/6d3467a0-e5d0-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-8.24.48-PM.png)

익숙한 화면이 나옵니다.

:wq를 눌러 저장하고, 히스토리를 살핍니다.

![Screen Shot 2019-10-03 at 8.25.47 PM.png](https://images.velog.io/post-images/leejh3224/8f737ea0-e5d0-11e9-adc8-77c29e30dd83/Screen-Shot-2019-10-03-at-8.25.47-PM.png)

로컬 브랜치에 revert 커밋이 생성되었습니다.

이제 이 녀석만 푸쉬하면 다시 퇴근할 수 있겠네요.

`git show HEAD`를 하면 revert 커밋이 어떤 변화를 생성했는지 확인할 수 있습니다.

![Screen Shot 2019-10-03 at 8.27.18 PM.png](https://images.velog.io/post-images/leejh3224/c7695c80-e5d0-11e9-adc8-77c29e30dd83/Screen-Shot-2019-10-03-at-8.27.18-PM.png)

기존 내용을 삭제하고 이전 내용을 집어넣었네요. 말 그대로 revert, 되돌리기입니다.

학습을 마쳤으니 원격 저장소에 올라간 `dev` 브랜치는 지우도록 하겠습니다.

```
git push origin --delete dev
```

### 커밋 히스토리 둘러보기

커밋 히스토리를 둘러보기에는 커맨드라인이 불편하시다구요?

그건 편견입니다!

이번에는 `git log`를 어떻게 하면 좀 더 효과적으로 사용할 수 있는지 알아봅시다.

첫 번째 옵션은 `--graph` 입니다. 

이 옵션은 각 브랜치마다 * 와 -로 이루어진 그래프를 만들어주는데요, 굳이 GUI 프로그램을 사용하지 않더라도 쉽게 어떤 커밋이 어떤 브랜치에 해당하는지 파악할 수 있습니다.

![Screen Shot 2019-10-03 at 8.43.04 PM.png](https://images.velog.io/post-images/leejh3224/fa703020-e5d2-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-8.43.04-PM.png)

두 번째는 히스토리 간 이동입니다.

일반적으로 히스토리에서 이동할 때는 위쪽 아래쪽 방향키를 이용하게 되는데 이 경우 한 번에 한 줄밖에 이동하지 못합니다.

이 때는 `d`/`u`키를 사용하면 한 번에 한 페이지(터미널 창의 높이) 씩 이동이 가능합니다.

많은 경우 한 두 번의 페이지 이동으로도 원하는 커밋 내역을 찾을 수 있기 때문에 꽤 많은 수고를 덜어줍니다.

세 번째는 `-p` 옵션입니다.

`--graph` 옵션과 `-p` 옵션을 같이 사용하게 되면 

![Screen Shot 2019-10-03 at 8.47.17 PM.png](https://images.velog.io/post-images/leejh3224/9041ead0-e5d3-11e9-86bc-67e54f48dfd1/Screen-Shot-2019-10-03-at-8.47.17-PM.png)

해당 커밋의 변경 내역까지 모조리 보여줍니다.

마지막 팁은 커밋 히스토리 검색입니다.

일반적으로 리눅스 터미널에서 텍스트 검색에 자주 사용되는 명령어는 `grep`인데요, `git log` 또한 `grep` 옵션을 지원합니다.

`git log --graph -p --grep mistake`를 입력하게 되면 커밋 메세지에 mistake가 포함되는 내역을 찾아서 보여줍니다.

이 때 `-i`를 같이 사용하게 되면 대소문자 구분 없이 검색해주죠.

그러므로 `git log --graph -p -i --grep MISTAKE`로 검색하더라도 같은 결과가 나옵니다.

![Screen Shot 2019-10-03 at 8.49.30 PM.png](https://images.velog.io/post-images/leejh3224/df3148c0-e5d3-11e9-b5e4-f972be559391/Screen-Shot-2019-10-03-at-8.49.30-PM.png)


여기까지 여러 상황에서 사용할 수 있는 명령어들을 살펴보았습니다.

어떠셨나요? 이 정도만 알고 있더라도 GUI 프로그램을 거의 사용할 일이 없습니다. 

터미널 명령어만으로 모든 상황을 해쳐나가는 자신의 모습이 자랑스러우실 겁니다.

![1549px-Informatics_General_programmer_at_terminal.jpg](https://images.velog.io/post-images/leejh3224/a7ca20e0-e5d4-11e9-b85d-3f620b013243/1549px-InformaticsGeneralprogrammeratterminal.jpg)

## 2. Zshell 사용하기

여기까지 같이 살펴보았는데, 눈치가 빠르신 분이라면 제가 모든 명령어를 일일히 다 입력하지는 않았다는 것을 알아채셨을 겁니다.

가령 `git status`는 `gst`와 같은 식으로 말이죠.

이는 `Zshell` 프레임워크 중 하나인 `oh-my-zsh`의 `git plugin`을 사용했기 때문입니다.

`Zshell`은 유명한 unix shell 프로그램 중 하나로, 많은 개발자들이 사용하고 있으며, [한글로 된 좋은 튜토리얼](https://nolboo.kim/blog/2015/08/21/oh-my-zsh/)도 있습니다. `Zshell`, 거기에 더해서 `oh-my-zsh`에는 여러 편의 기능들에 더해 `git alias`라는 기능이 존재합니다.

위 튜토리얼을 따라서 필요한 모든 것들을 설치했다면 `git alias`도 사용할 수 있을 겁니다.

먼저 사용 가능한 모든 `git alias`를 확인해봅시다.

```zsh
alias | grep git
```

터미널에 위 명령어를 입력하게 되면 사용 가능한 명령어가 출력됩니다.

이 중에서 제가 가장 자주 사용하고 또 유용하다고 생각되는 것들을 소개하겠습니다.

```bash
gaa='git add --all'
gb='git branch'
gbD='git branch -D'
gcb='git checkout -b'
gcm='git checkout master'
gcmsg='git commit -m'
gco='git checkout'
gcp='git cherry-pick'
gfo='git fetch origin'
gl='git pull'
glgg='git log --graph'
glgp='git log --stat -p'
gm='git merge'
gp='git push'
gpsup='git push --set-upstream origin $(git_current_branch)'
'gpf!'='git push --force'
grb='git rebase'
grbm='git rebase master'
gst='git status'
```

모두가 하루에 5 ~ 10번은 입력하는 명령어들이죠.

처음에는 익숙하지 않게 느껴질 수 있지만 몇 번 의식적으로 연습하다보면 자기도 모르게 짧은 명령어가 먼저 나오게 될 겁니다.

거기에 `oh-my-zsh`이 제공하는 최근 사용한 명령어 하이라이트가 더해진다면 누구보다 빠르게 작업이 가능하죠.

여기까지 Git을 프로처럼 사용하는 방법에 대해 알아보았습니다.

자신만의 Git 꿀팁이 있다면 같이 공유해주세요 👍
