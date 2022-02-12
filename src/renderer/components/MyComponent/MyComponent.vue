<template>
  <div class="main">
    <div class="side-left">
      <ul>
        <li v-for="(calendar, index) in calendarList" :key="index">
          <div
            class="{selected : calendar.show}"
            @click="onHandleHideCalendar({ index })"
          >
            {{ calendar.name }}
          </div>
        </li>
      </ul>
    </div>
    <div class="side-right">
      <calendar
        style="height: 600px; width: 100%"
        :calendars="calendarList"
        :schedules="scheduleList"
        :view="view"
        :taskView="taskView"
        :scheduleView="scheduleView"
        :theme="theme"
        :week="week"
        :month="month"
        :timezones="timezones"
        :disableDblClick="disableDblClick"
        :isReadOnly="isReadOnly"
        :template="template"
        :useCreationPopup="useCreationPopup"
        :useDetailPopup="useDetailPopup"
        @afterRenderSchedule="onAfterRenderSchedule"
        @beforeCreateSchedule="onBeforeCreateSchedule"
        @beforeDeleteSchedule="onBeforeDeleteSchedule"
        @beforeUpdateSchedule="onBeforeUpdateSchedule"
        @clickDayname="onClickDayname"
        @clickSchedule="onClickSchedule"
        @clickTimezonesCollapseBtn="onClickTimezonesCollapseBtn"
      />
    </div>
  </div>
</template>

<script>
import 'tui-calendar/dist/tui-calendar.css'
import Calendar from '@toast-ui/vue-calendar/src/Calendar.vue'

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'

export default {
  name: 'MyComponent',
  components: {
    calendar: Calendar
  },
  data () {
    return {
      calendarList: [
        {
          id: '0',
          name: 'home',
          show: true
        },
        {
          id: '1',
          name: 'office',
          show: true
        }
      ],
      scheduleList: [
        {
          id: '1',
          calendarId: '1',
          title: 'my schedule',
          category: 'time',
          dueDateClass: '',
          start: '2022-02-18T22:30:00+09:00',
          end: '2022-02-19T02:30:00+09:00'
        },
        {
          id: '2',
          calendarId: '1',
          title: 'second schedule',
          category: 'time',
          dueDateClass: '',
          start: '2022-02-18T17:30:00+09:00',
          end: '2022-02-19T17:31:00+09:00'
        }
      ],
      view: 'month',
      taskView: true,
      scheduleView: ['time'],
      theme: {
        'month.dayname.height': '30px',
        'month.dayname.borderLeft': '1px solid #ff0000',
        'month.dayname.textAlign': 'center',
        'week.today.color': '#333',
        'week.daygridLeft.width': '100px',
        'week.timegridLeft.width': '100px'
      },
      week: {
        narrowWeekend: true,
        showTimezoneCollapseButton: true,
        timezonesCollapsed: false
      },
      month: {
        visibleWeeksCount: 6,
        startDayOfWeek: 1
      },
      timezones: [
        {
          timezoneOffset: 540,
          displayLabel: 'GMT+09:00',
          tooltip: 'Seoul'
        },
        {
          timezoneOffset: -420,
          displayLabel: 'GMT-08:00',
          tooltip: 'Los Angeles'
        }
      ],
      disableDblClick: true,
      isReadOnly: false,
      template: {
        milestone: function (schedule) {
          return `<span style="color:red;">${schedule.title}</span>`
        },
        milestoneTitle: function () {
          return 'MILESTONE'
        }
      },
      useCreationPopup: true,
      useDetailPopup: true
    }
  },
  computed: {
    selectedCalendars: function () {
      console.log(this.calendarList)
      return this.calendarList.filter((calendar) => calendar.show)
    }
  },
  methods: {
    onHandleHideCalendar ({ index }) {
      this.calendarList[index].show = !this.calendarList[index].show
      console.log('onHandleHideCalendar', index)
    },
    onAfterRenderSchedule (e) {
      // implement your code
      console.log(e)
    },
    onBeforeCreateSchedule (e) {
      // implement your code
      console.log(e)
    },
    onBeforeDeleteSchedule (e) {
      // implement your code
      console.log(e)
    },
    onBeforeUpdateSchedule (e) {
      // implement your code
      console.log(e)
    },
    onClickDayname (e) {
      // implement your code
      console.log(e)
    },
    onClickSchedule (e) {
      // implement your code
      console.log(e)
    },
    onClickTimezonesCollapseBtn (e) {
      // implement your code
      console.log(e)
    }
  }
}
</script>

<style>
.main {
  width: 100%;
  display: flex;
}

.side-left {
  width: 30%;
}

.side-right {
  width: 70%;
}
</style>
