import handlers from "../handlers.js"
//테스트할 기능인 라우트 핸들러 임포트

test('home page renders', ()=>{
  const req={}
  const res={render:jest.fn()} //요청, 응답 객체
  handlers.home(req,res) //home 호출
  expect(res.render.mock.calls.length).toBe(1)
  //단 한 번 호출되는가?
  expect(res.render.mock.calls[0][0]).toBe('home')
  //첫번째로 전달받은 매개변수가 home
})