import {datetime} from "./apis/Datetime";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Datetime Wrapper</h1>
    <p class="read-the-docs">
      now YMD : ${datetime().format('YYYY-MM-DD')}
    </p>
  </div>
`
