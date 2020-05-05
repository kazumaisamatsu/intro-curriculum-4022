extends layout

block content
  div.jumbotron.my-3
    h1.display-4 予定調整くん
    p.lead 予定調整くんは、GitHubで認証でき、予定を作って出欠が取れるサービスです
  if user
    div
      a(href="/schedules/new").btn.btn-info 予定を作る
    - var hasSchedule = schedules.length > 0
    if hasSchedule
      h3.my-3 あなたの作った予定一覧
      table.table
        tr
          th 予定名
          th 更新日時
        each schedule in schedules
          tr
            th 予定名
            th 更新日時
          each schedule in schedules
            tr
              td
                a(href=`/schedules/${schedule.scheduleId}`) #{schedule.scheduleName}
              td #{schedule.formattedUpdatedAt}
          td
            a(href=`/schedules/${schedule.scheduleId}`) #{schedule.scheduleName}
          td #{schedule.updatedAt}
