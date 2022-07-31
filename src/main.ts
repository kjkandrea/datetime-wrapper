import {datetime} from "./apis/datetime.dayjs";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Datetime Wrapper</h1>
    <p>
      now YMD : ${datetime().format('YYYY-MM-DD')}
    </p>
    <p>
      tummorrow YMD : ${datetime().add(1, 'year').format('YYYY-MM-DD')}
    </p>
    <p>
      1 year ago YMD : ${datetime().subtract(1, 'year').format('YYYY-MM-DD')}
    </p>
  </div>
`
