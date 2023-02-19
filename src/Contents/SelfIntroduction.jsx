import React from 'react'
import { Typography } from '@mui/material'
import {FcCloseUpMode, FcBusinesswoman,FcMms} from 'react-icons/fc';

export default function SelfIntroduction() {
  return [
    {title:"나의 이야기",
    content:<Typography>
        처음 개발에 흥미를 가지게 된건 24살 한 인터넷 업체에서 아르바이트를 시작하면서부터였습니다. 당시 html을 처음 알게 되고, 그것을 통해 소규모 웹사이트를 개발해보면서 단순히 어려울것이라고만 생각했던 개발이 생각보다 쉽고, 흥미에도 맞다는 생각을 하게 되었습니다. 그래서 복학을 하면서 컴퓨터공학 복수전공을 신청하게 되었습니다. <br></br>

그렇게 전공을 하게 되면서부터는, 그저 간단한 프로그램을 만드는 것이 아닌, 전문가로 인정을 받기 위해서는 생각보다 세부적인 지식들이 많이 필요하다는것을 알게되었습니다. 문과출신인 저에게 알고리즘과 같은 과목들은 다소 버겁게 느껴지기는 했지만, 좋은 사람들을 많이 만나 도움을 받으면서 즐겁게 해쳐나갈 수 있었습니다.<br></br>

그렇게 학교에서는 운영체제, 자료구조와 같은 컴퓨터의 기본적인 지식들을 배우고 그 외에 시간에는 React를 비롯한 프론트엔드 웹 지식을 쌓으며 1년 반이라는 시간을 보냈습니다.<br></br>

26살, 졸업을 하였을 때, 포트폴리오를 준비하다 우연히 타로카드 리딩 아르바이트를 시작하게 되었고, 사람들과 소통하며 그들의 속내를 듣는것이 제법 저와 잘 맞아 2년 정도 근무하게 되었습니다.<br></br>

하지만 머릿속에는 여전히 프로그래밍에 대한 열망이 남아있었고, 타로카드 업무를 하면서도 가벼운 프로그램을 만들어 블로그에 배포하는 등, 공부를 놓지 않으려 했지만 두가지 직업을 병행하기에는 실질적으로 무리가 있었습니다. <br></br>

사람들과 소통을 하면서 다양한 사람들을 경험하는 것은 정말 즐거운 일이었지만 제가 정말로 가고자 하는 방향과 맞지 않다는 것을 상기하며 그렇게 2년 동안 하던 일을 마무리하고 개발자로써의 자질을 더 닦기 위해 노력중에 있습니다. <br></br>

“타로카드 리딩” 이라는 업무 경험은 언뜻, 개발과는 상관 없어 보일 수 있습니다. 하지만 저는 이 아르바이트를 하면서 그 누구보다 “사람”을 잘 이해하게 되었고, 의사소통 과정에서 무엇이 중요한지를 배울 수 있었습니다. 그리고 이것이 개발자로 근무하며 협업과 “소통”에 큰 도움을 줄 것이라는 것을 의심하지 않습니다.
</Typography>,avatar:<FcCloseUpMode className='text-3xl'></FcCloseUpMode>},
// {title:"직무 경험",
// content:<Typography>
// HTML/CSS/JS를 익혔을 때, 소소한 플레시 게임을 만들거나 원하는 느낌의 대략적인 UI를 구현하면서, 사실 "꼭 Vue나 React와 같은 프레임워크를 익힐 필요가 있을까?"
// </Typography>,
// avatar:<FcMms className='text-3xl'></FcMms>},
//     {title:"입사 후 포부",
//   content:<Typography>

//   </Typography>,
//   avatar:<FcBusinesswoman className='text-3xl'></FcBusinesswoman>},

  ]
}
