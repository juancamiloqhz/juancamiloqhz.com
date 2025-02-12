import React from "react"
import { ResponsiveCalendar } from "@nivo/calendar"

export default function CalendarChart() {
  return (
    <ResponsiveCalendar
      data={data}
      from="2015-03-01"
      to="2016-07-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  )
}

const data = [
  {
    value: 171,
    day: "2016-08-29",
  },
  {
    value: 63,
    day: "2018-06-06",
  },
  {
    value: 229,
    day: "2016-03-28",
  },
  {
    value: 196,
    day: "2017-07-16",
  },
  {
    value: 385,
    day: "2017-02-13",
  },
  {
    value: 217,
    day: "2015-11-25",
  },
  {
    value: 288,
    day: "2015-08-05",
  },
  {
    value: 214,
    day: "2016-08-02",
  },
  {
    value: 35,
    day: "2016-06-06",
  },
  {
    value: 315,
    day: "2016-02-16",
  },
  {
    value: 160,
    day: "2015-10-05",
  },
  {
    value: 337,
    day: "2015-08-25",
  },
  {
    value: 201,
    day: "2017-11-23",
  },
  {
    value: 96,
    day: "2015-07-13",
  },
  {
    value: 224,
    day: "2016-10-23",
  },
  {
    value: 399,
    day: "2015-10-14",
  },
  {
    value: 204,
    day: "2015-07-10",
  },
  {
    value: 139,
    day: "2015-12-03",
  },
  {
    value: 219,
    day: "2017-12-20",
  },
  {
    value: 12,
    day: "2016-07-21",
  },
  {
    value: 87,
    day: "2015-12-20",
  },
  {
    value: 400,
    day: "2016-05-04",
  },
  {
    value: 208,
    day: "2017-08-09",
  },
  {
    value: 361,
    day: "2015-10-16",
  },
  {
    value: 129,
    day: "2018-06-04",
  },
  {
    value: 203,
    day: "2016-09-26",
  },
  {
    value: 155,
    day: "2016-12-19",
  },
  {
    value: 269,
    day: "2018-04-19",
  },
  {
    value: 59,
    day: "2018-06-25",
  },
  {
    value: 114,
    day: "2018-04-12",
  },
  {
    value: 139,
    day: "2017-12-13",
  },
  {
    value: 210,
    day: "2015-05-26",
  },
  {
    value: 240,
    day: "2015-06-07",
  },
  {
    value: 35,
    day: "2016-06-13",
  },
  {
    value: 157,
    day: "2016-03-04",
  },
  {
    value: 78,
    day: "2016-09-25",
  },
  {
    value: 16,
    day: "2017-07-17",
  },
  {
    value: 386,
    day: "2015-07-24",
  },
  {
    value: 261,
    day: "2016-12-20",
  },
  {
    value: 302,
    day: "2015-05-30",
  },
  {
    value: 15,
    day: "2016-03-18",
  },
  {
    value: 392,
    day: "2015-07-12",
  },
  {
    value: 77,
    day: "2015-07-22",
  },
  {
    value: 357,
    day: "2017-12-17",
  },
  {
    value: 233,
    day: "2016-03-09",
  },
  {
    value: 4,
    day: "2017-08-04",
  },
  {
    value: 273,
    day: "2018-04-06",
  },
  {
    value: 157,
    day: "2017-05-06",
  },
  {
    value: 25,
    day: "2015-04-21",
  },
  {
    value: 93,
    day: "2017-11-15",
  },
  {
    value: 23,
    day: "2016-05-14",
  },
  {
    value: 187,
    day: "2015-11-15",
  },
  {
    value: 309,
    day: "2017-05-25",
  },
  {
    value: 337,
    day: "2017-08-20",
  },
  {
    value: 168,
    day: "2017-10-09",
  },
  {
    value: 7,
    day: "2015-06-06",
  },
  {
    value: 285,
    day: "2015-08-01",
  },
  {
    value: 220,
    day: "2018-01-07",
  },
  {
    value: 145,
    day: "2015-10-08",
  },
  {
    value: 268,
    day: "2016-02-27",
  },
  {
    value: 26,
    day: "2016-12-04",
  },
  {
    value: 198,
    day: "2016-03-17",
  },
  {
    value: 58,
    day: "2016-01-25",
  },
  {
    value: 157,
    day: "2017-10-10",
  },
  {
    value: 195,
    day: "2016-07-31",
  },
  {
    value: 93,
    day: "2016-04-14",
  },
  {
    value: 243,
    day: "2018-08-04",
  },
  {
    value: 298,
    day: "2018-07-31",
  },
  {
    value: 249,
    day: "2018-01-25",
  },
  {
    value: 196,
    day: "2018-03-28",
  },
  {
    value: 377,
    day: "2017-09-16",
  },
  {
    value: 269,
    day: "2016-05-31",
  },
  {
    value: 301,
    day: "2016-04-03",
  },
  {
    value: 156,
    day: "2016-08-13",
  },
  {
    value: 39,
    day: "2016-04-16",
  },
  {
    value: 206,
    day: "2018-04-22",
  },
  {
    value: 297,
    day: "2016-05-08",
  },
  {
    value: 361,
    day: "2016-10-28",
  },
  {
    value: 87,
    day: "2015-11-16",
  },
  {
    value: 331,
    day: "2017-08-26",
  },
  {
    value: 302,
    day: "2017-10-21",
  },
  {
    value: 386,
    day: "2016-02-08",
  },
  {
    value: 178,
    day: "2017-01-06",
  },
  {
    value: 177,
    day: "2015-06-29",
  },
  {
    value: 195,
    day: "2017-05-18",
  },
  {
    value: 95,
    day: "2016-01-19",
  },
  {
    value: 311,
    day: "2017-11-10",
  },
  {
    value: 248,
    day: "2018-05-24",
  },
  {
    value: 78,
    day: "2016-07-02",
  },
  {
    value: 106,
    day: "2016-03-07",
  },
  {
    value: 301,
    day: "2015-12-11",
  },
  {
    value: 281,
    day: "2017-03-04",
  },
  {
    value: 260,
    day: "2017-06-30",
  },
  {
    value: 276,
    day: "2017-01-09",
  },
  {
    value: 158,
    day: "2015-10-22",
  },
  {
    value: 151,
    day: "2016-01-07",
  },
  {
    value: 156,
    day: "2018-05-14",
  },
  {
    value: 370,
    day: "2015-07-28",
  },
  {
    value: 255,
    day: "2015-05-05",
  },
  {
    value: 53,
    day: "2018-08-11",
  },
  {
    value: 351,
    day: "2017-12-12",
  },
  {
    value: 51,
    day: "2017-07-27",
  },
  {
    value: 242,
    day: "2016-06-03",
  },
  {
    value: 193,
    day: "2017-07-06",
  },
  {
    value: 328,
    day: "2017-05-20",
  },
  {
    value: 174,
    day: "2017-06-24",
  },
  {
    value: 62,
    day: "2016-09-12",
  },
  {
    value: 288,
    day: "2016-11-24",
  },
  {
    value: 382,
    day: "2016-07-19",
  },
  {
    value: 230,
    day: "2015-04-07",
  },
  {
    value: 25,
    day: "2016-01-23",
  },
  {
    value: 67,
    day: "2017-04-11",
  },
  {
    value: 215,
    day: "2018-05-17",
  },
  {
    value: 133,
    day: "2017-03-14",
  },
  {
    value: 162,
    day: "2015-05-22",
  },
  {
    value: 317,
    day: "2015-04-09",
  },
  {
    value: 160,
    day: "2016-11-12",
  },
  {
    value: 206,
    day: "2017-07-07",
  },
  {
    value: 268,
    day: "2015-05-15",
  },
  {
    value: 330,
    day: "2017-02-14",
  },
  {
    value: 204,
    day: "2017-08-11",
  },
  {
    value: 83,
    day: "2016-02-10",
  },
  {
    value: 320,
    day: "2016-10-01",
  },
  {
    value: 9,
    day: "2017-12-02",
  },
  {
    value: 218,
    day: "2016-04-30",
  },
  {
    value: 62,
    day: "2016-08-18",
  },
  {
    value: 194,
    day: "2016-01-13",
  },
  {
    value: 17,
    day: "2016-12-31",
  },
  {
    value: 110,
    day: "2016-03-20",
  },
  {
    value: 209,
    day: "2016-11-08",
  },
  {
    value: 32,
    day: "2017-10-28",
  },
  {
    value: 215,
    day: "2017-01-22",
  },
  {
    value: 275,
    day: "2016-08-14",
  },
  {
    value: 126,
    day: "2017-01-24",
  },
  {
    value: 251,
    day: "2016-10-07",
  },
  {
    value: 356,
    day: "2015-09-01",
  },
  {
    value: 292,
    day: "2016-07-15",
  },
  {
    value: 222,
    day: "2015-12-17",
  },
  {
    value: 24,
    day: "2017-10-07",
  },
  {
    value: 23,
    day: "2016-04-21",
  },
  {
    value: 18,
    day: "2017-10-01",
  },
  {
    value: 175,
    day: "2018-05-23",
  },
  {
    value: 121,
    day: "2017-10-23",
  },
  {
    value: 198,
    day: "2015-05-01",
  },
  {
    value: 224,
    day: "2017-01-04",
  },
  {
    value: 204,
    day: "2017-03-21",
  },
  {
    value: 290,
    day: "2017-07-19",
  },
  {
    value: 109,
    day: "2017-02-15",
  },
  {
    value: 390,
    day: "2017-11-07",
  },
  {
    value: 120,
    day: "2017-11-08",
  },
  {
    value: 149,
    day: "2016-03-21",
  },
  {
    value: 210,
    day: "2015-08-07",
  },
  {
    value: 78,
    day: "2016-05-02",
  },
  {
    value: 309,
    day: "2015-12-27",
  },
  {
    value: 90,
    day: "2016-08-05",
  },
  {
    value: 203,
    day: "2018-05-08",
  },
  {
    value: 110,
    day: "2016-12-11",
  },
  {
    value: 397,
    day: "2016-03-30",
  },
  {
    value: 81,
    day: "2015-10-09",
  },
  {
    value: 219,
    day: "2017-05-11",
  },
  {
    value: 290,
    day: "2017-10-04",
  },
  {
    value: 146,
    day: "2018-07-29",
  },
  {
    value: 120,
    day: "2018-01-08",
  },
  {
    value: 11,
    day: "2018-06-30",
  },
  {
    value: 197,
    day: "2017-07-02",
  },
  {
    value: 93,
    day: "2017-12-28",
  },
  {
    value: 196,
    day: "2016-04-20",
  },
  {
    value: 261,
    day: "2016-07-27",
  },
  {
    value: 306,
    day: "2017-08-21",
  },
  {
    value: 104,
    day: "2017-12-30",
  },
  {
    value: 173,
    day: "2016-11-04",
  },
  {
    value: 399,
    day: "2016-06-27",
  },
  {
    value: 393,
    day: "2015-05-03",
  },
  {
    value: 172,
    day: "2018-05-26",
  },
  {
    value: 86,
    day: "2017-11-27",
  },
  {
    value: 350,
    day: "2018-03-03",
  },
  {
    value: 192,
    day: "2018-06-20",
  },
  {
    value: 191,
    day: "2017-01-25",
  },
  {
    value: 117,
    day: "2015-06-09",
  },
  {
    value: 238,
    day: "2016-12-02",
  },
  {
    value: 211,
    day: "2016-11-28",
  },
  {
    value: 142,
    day: "2016-07-06",
  },
  {
    value: 72,
    day: "2016-02-13",
  },
  {
    value: 56,
    day: "2015-06-14",
  },
  {
    value: 269,
    day: "2018-06-05",
  },
  {
    value: 218,
    day: "2018-04-15",
  },
  {
    value: 255,
    day: "2016-08-17",
  },
  {
    value: 126,
    day: "2015-07-03",
  },
  {
    value: 113,
    day: "2016-02-02",
  },
  {
    value: 321,
    day: "2015-05-08",
  },
  {
    value: 82,
    day: "2018-05-25",
  },
  {
    value: 2,
    day: "2018-02-14",
  },
  {
    value: 116,
    day: "2016-03-02",
  },
  {
    value: 109,
    day: "2015-09-21",
  },
  {
    value: 349,
    day: "2016-09-06",
  },
  {
    value: 253,
    day: "2017-01-08",
  },
  {
    value: 232,
    day: "2018-02-07",
  },
  {
    value: 388,
    day: "2015-10-29",
  },
  {
    value: 103,
    day: "2017-10-29",
  },
  {
    value: 65,
    day: "2015-11-14",
  },
  {
    value: 225,
    day: "2018-03-11",
  },
  {
    value: 5,
    day: "2016-03-03",
  },
  {
    value: 300,
    day: "2015-06-20",
  },
  {
    value: 81,
    day: "2018-01-09",
  },
  {
    value: 108,
    day: "2018-05-16",
  },
  {
    value: 5,
    day: "2017-09-09",
  },
  {
    value: 23,
    day: "2018-03-20",
  },
  {
    value: 240,
    day: "2017-04-08",
  },
  {
    value: 134,
    day: "2015-04-05",
  },
  {
    value: 126,
    day: "2015-12-08",
  },
  {
    value: 27,
    day: "2017-11-04",
  },
  {
    value: 175,
    day: "2018-01-10",
  },
  {
    value: 387,
    day: "2017-02-16",
  },
  {
    value: 198,
    day: "2018-04-13",
  },
  {
    value: 258,
    day: "2017-10-08",
  },
  {
    value: 290,
    day: "2016-09-24",
  },
  {
    value: 129,
    day: "2016-03-22",
  },
  {
    value: 344,
    day: "2018-03-06",
  },
  {
    value: 390,
    day: "2016-07-03",
  },
  {
    value: 200,
    day: "2017-03-22",
  },
  {
    value: 129,
    day: "2017-04-03",
  },
  {
    value: 293,
    day: "2016-11-26",
  },
  {
    value: 296,
    day: "2015-08-27",
  },
  {
    value: 120,
    day: "2015-06-03",
  },
  {
    value: 357,
    day: "2018-05-01",
  },
  {
    value: 76,
    day: "2018-06-01",
  },
  {
    value: 45,
    day: "2015-09-10",
  },
  {
    value: 285,
    day: "2016-02-01",
  },
  {
    value: 357,
    day: "2018-05-11",
  },
  {
    value: 232,
    day: "2017-06-08",
  },
  {
    value: 66,
    day: "2015-09-03",
  },
  {
    value: 204,
    day: "2017-05-28",
  },
  {
    value: 96,
    day: "2015-05-25",
  },
  {
    value: 123,
    day: "2016-07-11",
  },
  {
    value: 308,
    day: "2015-12-06",
  },
  {
    value: 185,
    day: "2017-12-31",
  },
  {
    value: 280,
    day: "2017-11-16",
  },
  {
    value: 112,
    day: "2015-07-26",
  },
  {
    value: 334,
    day: "2016-04-13",
  },
  {
    value: 280,
    day: "2017-01-29",
  },
  {
    value: 241,
    day: "2017-10-31",
  },
  {
    value: 266,
    day: "2017-02-22",
  },
  {
    value: 95,
    day: "2018-04-18",
  },
  {
    value: 88,
    day: "2015-08-26",
  },
  {
    value: 19,
    day: "2018-03-08",
  },
  {
    value: 292,
    day: "2018-06-16",
  },
  {
    value: 254,
    day: "2015-05-23",
  },
  {
    value: 364,
    day: "2015-09-17",
  },
  {
    value: 298,
    day: "2015-11-27",
  },
  {
    value: 234,
    day: "2018-01-03",
  },
  {
    value: 352,
    day: "2016-10-21",
  },
  {
    value: 13,
    day: "2017-10-19",
  },
  {
    value: 88,
    day: "2017-11-17",
  },
  {
    value: 290,
    day: "2018-07-26",
  },
  {
    value: 355,
    day: "2016-06-26",
  },
  {
    value: 368,
    day: "2018-01-05",
  },
  {
    value: 217,
    day: "2018-03-27",
  },
  {
    value: 189,
    day: "2016-12-28",
  },
  {
    value: 7,
    day: "2017-06-29",
  },
  {
    value: 39,
    day: "2016-07-20",
  },
  {
    value: 342,
    day: "2018-04-04",
  },
  {
    value: 380,
    day: "2016-03-16",
  },
  {
    value: 55,
    day: "2015-10-28",
  },
  {
    value: 375,
    day: "2017-12-15",
  },
  {
    value: 282,
    day: "2016-11-27",
  },
  {
    value: 211,
    day: "2017-11-30",
  },
  {
    value: 30,
    day: "2015-08-24",
  },
  {
    value: 263,
    day: "2018-05-04",
  },
  {
    value: 6,
    day: "2016-11-09",
  },
  {
    value: 375,
    day: "2017-05-04",
  },
  {
    value: 160,
    day: "2017-01-11",
  },
  {
    value: 132,
    day: "2015-04-04",
  },
  {
    value: 275,
    day: "2017-10-30",
  },
  {
    value: 314,
    day: "2015-05-29",
  },
  {
    value: 264,
    day: "2016-01-18",
  },
  {
    value: 21,
    day: "2017-09-13",
  },
  {
    value: 91,
    day: "2016-08-23",
  },
  {
    value: 160,
    day: "2017-05-23",
  },
  {
    value: 314,
    day: "2015-05-18",
  },
  {
    value: 201,
    day: "2018-03-16",
  },
  {
    value: 99,
    day: "2017-02-06",
  },
  {
    value: 210,
    day: "2017-07-01",
  },
  {
    value: 332,
    day: "2015-08-12",
  },
  {
    value: 293,
    day: "2015-06-27",
  },
  {
    value: 50,
    day: "2017-03-13",
  },
  {
    value: 78,
    day: "2015-12-30",
  },
  {
    value: 279,
    day: "2017-02-09",
  },
  {
    value: 326,
    day: "2017-11-02",
  },
  {
    value: 310,
    day: "2018-08-08",
  },
  {
    value: 290,
    day: "2015-10-03",
  },
  {
    value: 105,
    day: "2017-06-15",
  },
  {
    value: 204,
    day: "2016-10-25",
  },
  {
    value: 176,
    day: "2015-04-14",
  },
  {
    value: 211,
    day: "2018-05-30",
  },
  {
    value: 99,
    day: "2016-08-26",
  },
  {
    value: 319,
    day: "2016-10-10",
  },
  {
    value: 169,
    day: "2018-04-27",
  },
  {
    value: 244,
    day: "2016-10-02",
  },
  {
    value: 2,
    day: "2017-08-01",
  },
  {
    value: 65,
    day: "2015-10-21",
  },
  {
    value: 64,
    day: "2015-11-03",
  },
  {
    value: 121,
    day: "2017-01-15",
  },
  {
    value: 66,
    day: "2015-11-05",
  },
  {
    value: 279,
    day: "2016-03-12",
  },
  {
    value: 343,
    day: "2017-01-27",
  },
  {
    value: 315,
    day: "2018-07-15",
  },
  {
    value: 127,
    day: "2017-07-26",
  },
  {
    value: 328,
    day: "2017-06-28",
  },
  {
    value: 200,
    day: "2018-07-01",
  },
  {
    value: 2,
    day: "2017-03-17",
  },
  {
    value: 47,
    day: "2017-07-13",
  },
  {
    value: 15,
    day: "2016-05-22",
  },
  {
    value: 214,
    day: "2017-11-21",
  },
  {
    value: 364,
    day: "2016-03-01",
  },
  {
    value: 249,
    day: "2016-02-04",
  },
  {
    value: 116,
    day: "2016-03-25",
  },
  {
    value: 262,
    day: "2015-06-22",
  },
  {
    value: 56,
    day: "2017-04-25",
  },
  {
    value: 259,
    day: "2017-08-29",
  },
  {
    value: 73,
    day: "2018-01-12",
  },
  {
    value: 237,
    day: "2017-04-07",
  },
  {
    value: 157,
    day: "2017-06-18",
  },
  {
    value: 364,
    day: "2015-06-10",
  },
  {
    value: 214,
    day: "2016-07-22",
  },
  {
    value: 386,
    day: "2018-01-26",
  },
  {
    value: 157,
    day: "2015-07-15",
  },
  {
    value: 95,
    day: "2018-04-29",
  },
  {
    value: 200,
    day: "2017-11-18",
  },
  {
    value: 177,
    day: "2016-12-24",
  },
  {
    value: 6,
    day: "2017-09-30",
  },
  {
    value: 169,
    day: "2016-12-18",
  },
  {
    value: 328,
    day: "2016-08-16",
  },
  {
    value: 242,
    day: "2017-10-18",
  },
  {
    value: 61,
    day: "2016-06-14",
  },
  {
    value: 372,
    day: "2017-03-27",
  },
  {
    value: 353,
    day: "2016-05-10",
  },
  {
    value: 57,
    day: "2017-03-09",
  },
  {
    value: 330,
    day: "2018-04-02",
  },
  {
    value: 35,
    day: "2015-11-09",
  },
  {
    value: 37,
    day: "2016-01-30",
  },
  {
    value: 359,
    day: "2017-03-19",
  },
  {
    value: 186,
    day: "2015-11-26",
  },
  {
    value: 47,
    day: "2016-12-14",
  },
  {
    value: 227,
    day: "2016-11-05",
  },
  {
    value: 253,
    day: "2017-09-22",
  },
  {
    value: 355,
    day: "2018-05-06",
  },
  {
    value: 127,
    day: "2015-10-02",
  },
  {
    value: 375,
    day: "2018-02-15",
  },
  {
    value: 103,
    day: "2016-06-24",
  },
  {
    value: 293,
    day: "2017-06-20",
  },
  {
    value: 223,
    day: "2016-10-04",
  },
  {
    value: 269,
    day: "2016-11-20",
  },
  {
    value: 312,
    day: "2017-02-23",
  },
  {
    value: 399,
    day: "2015-06-23",
  },
  {
    value: 68,
    day: "2017-08-06",
  },
  {
    value: 124,
    day: "2016-05-24",
  },
  {
    value: 371,
    day: "2018-04-05",
  },
  {
    value: 159,
    day: "2017-04-28",
  },
  {
    value: 56,
    day: "2017-07-04",
  },
  {
    value: 259,
    day: "2016-06-22",
  },
  {
    value: 148,
    day: "2018-07-20",
  },
  {
    value: 176,
    day: "2016-08-03",
  },
  {
    value: 27,
    day: "2016-02-18",
  },
  {
    value: 231,
    day: "2017-02-26",
  },
  {
    value: 26,
    day: "2016-07-28",
  },
  {
    value: 199,
    day: "2018-08-09",
  },
  {
    value: 336,
    day: "2017-11-11",
  },
  {
    value: 362,
    day: "2016-10-06",
  },
  {
    value: 129,
    day: "2016-12-17",
  },
  {
    value: 59,
    day: "2018-06-10",
  },
  {
    value: 251,
    day: "2017-12-04",
  },
  {
    value: 216,
    day: "2017-11-14",
  },
  {
    value: 323,
    day: "2015-09-18",
  },
  {
    value: 199,
    day: "2017-08-07",
  },
  {
    value: 159,
    day: "2015-08-13",
  },
  {
    value: 172,
    day: "2017-06-09",
  },
  {
    value: 218,
    day: "2018-02-10",
  },
  {
    value: 262,
    day: "2015-05-17",
  },
  {
    value: 146,
    day: "2018-04-21",
  },
  {
    value: 354,
    day: "2015-12-18",
  },
  {
    value: 352,
    day: "2015-11-12",
  },
  {
    value: 395,
    day: "2015-09-23",
  },
  {
    value: 315,
    day: "2018-07-16",
  },
  {
    value: 61,
    day: "2018-02-27",
  },
  {
    value: 71,
    day: "2017-05-10",
  },
  {
    value: 172,
    day: "2016-03-08",
  },
  {
    value: 167,
    day: "2016-03-23",
  },
  {
    value: 249,
    day: "2016-10-19",
  },
  {
    value: 103,
    day: "2017-09-12",
  },
  {
    value: 305,
    day: "2017-05-02",
  },
  {
    value: 129,
    day: "2015-07-30",
  },
  {
    value: 223,
    day: "2016-12-16",
  },
  {
    value: 69,
    day: "2018-05-29",
  },
  {
    value: 301,
    day: "2015-10-11",
  },
  {
    value: 371,
    day: "2018-05-07",
  },
  {
    value: 65,
    day: "2016-12-08",
  },
  {
    value: 377,
    day: "2017-05-29",
  },
  {
    value: 27,
    day: "2016-08-25",
  },
  {
    value: 238,
    day: "2018-04-17",
  },
  {
    value: 265,
    day: "2016-10-29",
  },
  {
    value: 121,
    day: "2015-06-21",
  },
  {
    value: 382,
    day: "2018-08-02",
  },
  {
    value: 8,
    day: "2016-07-24",
  },
  {
    value: 334,
    day: "2017-01-26",
  },
  {
    value: 100,
    day: "2017-03-07",
  },
  {
    value: 291,
    day: "2017-07-09",
  },
  {
    value: 223,
    day: "2016-10-05",
  },
  {
    value: 93,
    day: "2018-01-20",
  },
  {
    value: 269,
    day: "2016-11-06",
  },
  {
    value: 117,
    day: "2018-04-20",
  },
  {
    value: 161,
    day: "2015-11-07",
  },
  {
    value: 130,
    day: "2015-10-10",
  },
  {
    value: 210,
    day: "2015-07-27",
  },
  {
    value: 326,
    day: "2016-11-30",
  },
  {
    value: 326,
    day: "2018-06-14",
  },
  {
    value: 325,
    day: "2018-03-17",
  },
  {
    value: 152,
    day: "2017-05-19",
  },
  {
    value: 123,
    day: "2017-12-14",
  },
  {
    value: 109,
    day: "2016-01-28",
  },
  {
    value: 90,
    day: "2016-07-18",
  },
  {
    value: 271,
    day: "2018-07-12",
  },
  {
    value: 27,
    day: "2017-04-21",
  },
  {
    value: 348,
    day: "2017-06-04",
  },
  {
    value: 39,
    day: "2018-04-16",
  },
  {
    value: 293,
    day: "2016-11-13",
  },
  {
    value: 58,
    day: "2016-09-29",
  },
  {
    value: 282,
    day: "2018-02-09",
  },
  {
    value: 323,
    day: "2018-06-03",
  },
  {
    value: 80,
    day: "2018-03-05",
  },
  {
    value: 239,
    day: "2015-09-16",
  },
  {
    value: 147,
    day: "2017-09-19",
  },
  {
    value: 275,
    day: "2017-07-05",
  },
  {
    value: 132,
    day: "2015-10-07",
  },
  {
    value: 203,
    day: "2017-02-05",
  },
  {
    value: 372,
    day: "2016-11-15",
  },
  {
    value: 23,
    day: "2015-04-23",
  },
  {
    value: 26,
    day: "2017-10-12",
  },
  {
    value: 166,
    day: "2016-03-24",
  },
  {
    value: 79,
    day: "2016-05-05",
  },
  {
    value: 1,
    day: "2018-08-01",
  },
  {
    value: 50,
    day: "2016-03-10",
  },
  {
    value: 139,
    day: "2016-04-22",
  },
  {
    value: 254,
    day: "2017-01-21",
  },
  {
    value: 148,
    day: "2016-02-07",
  },
  {
    value: 141,
    day: "2015-07-05",
  },
  {
    value: 236,
    day: "2018-05-20",
  },
  {
    value: 230,
    day: "2018-02-05",
  },
  {
    value: 339,
    day: "2016-03-15",
  },
  {
    value: 14,
    day: "2017-01-05",
  },
  {
    value: 236,
    day: "2015-04-08",
  },
  {
    value: 307,
    day: "2016-09-27",
  },
  {
    value: 382,
    day: "2016-09-21",
  },
  {
    value: 141,
    day: "2016-07-07",
  },
  {
    value: 369,
    day: "2018-02-18",
  },
  {
    value: 226,
    day: "2017-06-01",
  },
  {
    value: 386,
    day: "2017-06-06",
  },
  {
    value: 52,
    day: "2015-09-30",
  },
  {
    value: 186,
    day: "2015-09-06",
  },
  {
    value: 355,
    day: "2017-05-26",
  },
  {
    value: 380,
    day: "2017-12-03",
  },
  {
    value: 140,
    day: "2017-11-24",
  },
  {
    value: 396,
    day: "2016-03-31",
  },
  {
    value: 136,
    day: "2016-02-03",
  },
  {
    value: 170,
    day: "2017-08-30",
  },
  {
    value: 247,
    day: "2016-12-07",
  },
  {
    value: 124,
    day: "2015-04-29",
  },
  {
    value: 166,
    day: "2015-04-22",
  },
  {
    value: 131,
    day: "2018-06-17",
  },
  {
    value: 44,
    day: "2016-05-01",
  },
  {
    value: 300,
    day: "2016-02-06",
  },
  {
    value: 3,
    day: "2015-04-15",
  },
  {
    value: 253,
    day: "2017-09-06",
  },
  {
    value: 291,
    day: "2018-05-21",
  },
  {
    value: 337,
    day: "2018-02-21",
  },
  {
    value: 350,
    day: "2016-06-15",
  },
  {
    value: 365,
    day: "2016-02-25",
  },
  {
    value: 247,
    day: "2018-05-05",
  },
  {
    value: 357,
    day: "2018-05-22",
  },
  {
    value: 313,
    day: "2016-10-22",
  },
  {
    value: 104,
    day: "2018-04-08",
  },
  {
    value: 325,
    day: "2017-12-23",
  },
  {
    value: 323,
    day: "2015-08-20",
  },
  {
    value: 330,
    day: "2017-05-17",
  },
  {
    value: 223,
    day: "2017-12-22",
  },
  {
    value: 397,
    day: "2018-01-31",
  },
  {
    value: 212,
    day: "2016-07-25",
  },
  {
    value: 279,
    day: "2018-04-23",
  },
  {
    value: 240,
    day: "2017-10-24",
  },
  {
    value: 41,
    day: "2017-03-02",
  },
  {
    value: 113,
    day: "2018-01-24",
  },
  {
    value: 390,
    day: "2018-02-22",
  },
  {
    value: 5,
    day: "2015-09-20",
  },
  {
    value: 3,
    day: "2016-02-24",
  },
  {
    value: 30,
    day: "2016-06-25",
  },
  {
    value: 154,
    day: "2015-12-31",
  },
  {
    value: 297,
    day: "2016-05-21",
  },
  {
    value: 381,
    day: "2017-10-11",
  },
  {
    value: 276,
    day: "2015-06-30",
  },
  {
    value: 123,
    day: "2016-07-09",
  },
  {
    value: 313,
    day: "2015-10-04",
  },
  {
    value: 349,
    day: "2017-10-25",
  },
  {
    value: 23,
    day: "2018-03-09",
  },
  {
    value: 117,
    day: "2016-12-05",
  },
  {
    value: 340,
    day: "2018-06-13",
  },
  {
    value: 64,
    day: "2016-03-27",
  },
  {
    value: 371,
    day: "2017-02-17",
  },
  {
    value: 204,
    day: "2015-04-28",
  },
  {
    value: 177,
    day: "2017-07-20",
  },
  {
    value: 18,
    day: "2018-03-23",
  },
  {
    value: 148,
    day: "2016-03-11",
  },
  {
    value: 306,
    day: "2016-06-19",
  },
  {
    value: 252,
    day: "2015-07-21",
  },
  {
    value: 168,
    day: "2015-09-27",
  },
  {
    value: 193,
    day: "2016-07-29",
  },
  {
    value: 28,
    day: "2017-09-23",
  },
  {
    value: 169,
    day: "2017-01-10",
  },
  {
    value: 3,
    day: "2015-09-26",
  },
  {
    value: 21,
    day: "2016-05-20",
  },
  {
    value: 203,
    day: "2018-01-29",
  },
  {
    value: 106,
    day: "2016-10-20",
  },
  {
    value: 37,
    day: "2016-05-03",
  },
  {
    value: 286,
    day: "2018-01-17",
  },
  {
    value: 191,
    day: "2016-06-05",
  },
  {
    value: 348,
    day: "2015-05-24",
  },
  {
    value: 368,
    day: "2015-07-07",
  },
  {
    value: 85,
    day: "2018-04-01",
  },
  {
    value: 181,
    day: "2017-11-12",
  },
  {
    value: 198,
    day: "2018-03-22",
  },
  {
    value: 139,
    day: "2015-10-31",
  },
  {
    value: 302,
    day: "2016-12-15",
  },
  {
    value: 162,
    day: "2017-01-13",
  },
  {
    value: 75,
    day: "2017-01-31",
  },
  {
    value: 240,
    day: "2017-11-05",
  },
  {
    value: 43,
    day: "2016-05-15",
  },
  {
    value: 227,
    day: "2015-09-11",
  },
  {
    value: 375,
    day: "2015-10-06",
  },
  {
    value: 225,
    day: "2017-12-27",
  },
  {
    value: 110,
    day: "2016-12-13",
  },
  {
    value: 355,
    day: "2018-04-28",
  },
  {
    value: 9,
    day: "2015-09-19",
  },
  {
    value: 79,
    day: "2017-08-03",
  },
  {
    value: 187,
    day: "2015-12-02",
  },
  {
    value: 129,
    day: "2017-05-03",
  },
  {
    value: 156,
    day: "2018-04-11",
  },
  {
    value: 252,
    day: "2017-04-12",
  },
  {
    value: 99,
    day: "2015-05-16",
  },
  {
    value: 285,
    day: "2018-02-12",
  },
  {
    value: 189,
    day: "2017-03-10",
  },
  {
    value: 399,
    day: "2016-09-17",
  },
  {
    value: 140,
    day: "2015-04-24",
  },
  {
    value: 155,
    day: "2018-02-28",
  },
  {
    value: 198,
    day: "2017-05-16",
  },
  {
    value: 218,
    day: "2015-07-17",
  },
  {
    value: 190,
    day: "2017-06-25",
  },
  {
    value: 228,
    day: "2017-09-11",
  },
  {
    value: 231,
    day: "2016-04-07",
  },
  {
    value: 37,
    day: "2018-03-15",
  },
  {
    value: 129,
    day: "2017-07-21",
  },
  {
    value: 112,
    day: "2015-11-02",
  },
  {
    value: 144,
    day: "2016-04-25",
  },
  {
    value: 328,
    day: "2016-08-28",
  },
  {
    value: 70,
    day: "2016-08-11",
  },
  {
    value: 129,
    day: "2017-12-19",
  },
  {
    value: 159,
    day: "2018-02-13",
  },
  {
    value: 298,
    day: "2015-07-19",
  },
  {
    value: 332,
    day: "2016-04-09",
  },
  {
    value: 35,
    day: "2017-08-25",
  },
  {
    value: 153,
    day: "2015-09-15",
  },
  {
    value: 349,
    day: "2017-04-29",
  },
  {
    value: 124,
    day: "2017-11-13",
  },
  {
    value: 358,
    day: "2016-03-13",
  },
  {
    value: 45,
    day: "2015-06-05",
  },
  {
    value: 184,
    day: "2018-01-06",
  },
  {
    value: 313,
    day: "2015-04-25",
  },
  {
    value: 208,
    day: "2015-08-23",
  },
  {
    value: 50,
    day: "2017-05-30",
  },
  {
    value: 16,
    day: "2017-03-28",
  },
  {
    value: 300,
    day: "2018-04-07",
  },
  {
    value: 200,
    day: "2016-08-09",
  },
  {
    value: 341,
    day: "2015-08-11",
  },
  {
    value: 120,
    day: "2017-06-12",
  },
  {
    value: 53,
    day: "2017-01-28",
  },
  {
    value: 122,
    day: "2016-12-29",
  },
  {
    value: 135,
    day: "2016-11-16",
  },
  {
    value: 54,
    day: "2016-06-17",
  },
  {
    value: 353,
    day: "2017-06-07",
  },
  {
    value: 389,
    day: "2016-04-08",
  },
  {
    value: 298,
    day: "2018-03-29",
  },
  {
    value: 274,
    day: "2016-06-16",
  },
  {
    value: 111,
    day: "2018-05-18",
  },
  {
    value: 239,
    day: "2016-02-17",
  },
  {
    value: 373,
    day: "2018-02-06",
  },
  {
    value: 117,
    day: "2016-02-21",
  },
  {
    value: 31,
    day: "2017-01-20",
  },
  {
    value: 35,
    day: "2016-05-30",
  },
  {
    value: 228,
    day: "2018-02-11",
  },
  {
    value: 350,
    day: "2016-01-27",
  },
  {
    value: 188,
    day: "2015-05-06",
  },
  {
    value: 44,
    day: "2015-04-06",
  },
  {
    value: 124,
    day: "2015-06-17",
  },
  {
    value: 393,
    day: "2018-06-21",
  },
  {
    value: 8,
    day: "2016-06-04",
  },
  {
    value: 313,
    day: "2016-06-09",
  },
  {
    value: 69,
    day: "2018-07-19",
  },
  {
    value: 229,
    day: "2018-01-01",
  },
  {
    value: 375,
    day: "2015-08-09",
  },
  {
    value: 91,
    day: "2017-09-15",
  },
  {
    value: 45,
    day: "2016-10-09",
  },
  {
    value: 206,
    day: "2018-06-24",
  },
  {
    value: 243,
    day: "2017-03-15",
  },
  {
    value: 321,
    day: "2017-07-08",
  },
  {
    value: 214,
    day: "2016-11-22",
  },
  {
    value: 120,
    day: "2017-09-26",
  },
  {
    value: 361,
    day: "2018-08-06",
  },
]
