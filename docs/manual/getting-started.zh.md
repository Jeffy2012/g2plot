---
title: 快速上手
order: 1
---

## 安装

### 浏览器引入

既可以通过将脚本下载到本地也可以直接引入在线资源。

```html
<!-- 引入在线资源 -->
<script src="https://gw.alipayobjects.com/os/lib/antv/g2plot/1.0.0-beta/dist/g2plot.min.js"></script>
```

```html
<!-- 引入本地脚本 -->
<script src="./g2plot.js"></script>
```

### 通过 npm 安装

我们提供了 g2plot npm 包，通过下面的命令即可完成安装:

```
npm install @antv/g2plot --save
```

成功安装完成之后，即可使用 `import` 或 `require` 进行引用:

```
import g2plot from '@antv/g2plot';
```

## 快速试用

在 g2plot 引入页面后，我们就已经做好了创建第一个图表的准备了。下面是以一个基础折线图为例开始我们的第一个图表创建。

**step1**: 创建图表容器

```html
<div id="canvas"></div>
```

**step2**: 引入数据。g2plot 的数据源格式是 JSON 数组，数组的每个元素是一个标准 JSON 对象。

```
 const data = [{
            "year": "1991",
            "value": 3
        }, {
            "year": "1992",
            "value": 4
        }, {
            "year": "1993",
            "value": 3.5
        }, {
            "year": "1994",
            "value": 5
        }, {
            "year": "1995",
            "value": 4.9
        }, {
            "year": "1996",
            "value": 6
        }, {
            "year": "1997",
            "value": 7
        }, {
            "year": "1998",
            "value": 9
        }, {
            "year": "1999",
            "value": 13
   }];
```

**step3**: 创建并渲染图表

```
const linePlot = new g2plot.Line('canvas', {
  data,
  xField: 'year',
  yField: 'value'
});

linePlot.render();
```

最终结果：

src as img as p="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*ulnDT6yfBOkAAAAAAAAAAABkARQnAQ" width="400">(/p> as )

## 搭配图表组件

在上一步生成的基础折线图，已经具备了图表的基础组件之一：坐标轴。接下来，我们来为图表加入四个组件：图表标题(title)、图表描述(description)、辅助数据点(point)和图形标签(label)，使图表承载的信息更加丰富，更具有可读性：

**step1**: 配置图表标题文本

```
const linePlot = new g2plot.Line('canvas', {
  title:{
    text:'这是一个基础折线图'
  },
  data,
  xField: 'year',
  yField: 'value'
});

linePlot.render();
```

**step2**: 配置图表描述文本

```
const linePlot = new g2plot.Line('canvas', {
  title:{
    text:'这是一个基础折线图'
  },
  description:{
    text: '折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式。'
  },
  data,
  xField: 'year',
  yField: 'value'
});
linePlot.render();
```

**step3**: 显示辅助数据点

```
const linePlot = new g2plot.Line('canvas', {
  title:{
    text:'这是一个基础折线图'
  },
  description:{
    text: '折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式。'
  },
  data,
  xField: 'year',
  yField: 'value',
  point:{
    visible: true,
  }
});
linePlot.render();
```

**step4**: 显示图形标签

```
const linePlot = new g2plot.Line('canvas', {
  title:{
    text:'这是一个基础折线图'
  },
  description:{
    text: '折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式。'
  },
  data,
  xField: 'year',
  yField: 'value',
  point:{
    visible: true,
  },
  label:{
    visible: true
  }
});
linePlot.render();
```

最终结果：

src as img as p="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*920SRqZ_COMAAAAAAAAAAABkARQnAQ" width="400">(/p> as )

## 个性化设置

现在图表的内容足够丰富了，但图表各元素的视觉样式采用的是图表默认主题的样式，还没有经过特别定制。图表主体中的文本元素也没有进行格式化。下面我们来对图表进行一些个性化配置，我们将配置折线的颜色、更改辅助数据点的样式、为 y 轴标签加上单位：

**step1**: 配置折线颜色，来个冷色到暖色的大变身

```
const linePlot = new g2plot.Line('canvas', {
  title:{
    text:'这是一个基础折线图'
  },
  description:{
    text: '折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式。'
  },
  data,
  xField: 'year',
  yField: 'value',
  color:'#FE740C',
  point:{
    visible: true,
  },
  label:{
    visible: true
  }
});

linePlot.render();
```

**step2**: 更改辅助数据点大小及样式

```
const linePlot = new g2plot.Line('canvas', {
  title:{
    text:'这是一个基础折线图'
  },
  description:{
    text: '折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式。'
  },
  data,
  xField: 'year',
  yField: 'value',
  color:'#FE740C',
  point: {
    visible: true,
    size: 5,
    style:{
      fill:'#7979F5',
      lineWidth: 2,
      fillOpacity: 0.6
    }
  },
  label:{
    visible: true
  }
});
linePlot.render();
```

**step3**: 格式化 y 轴标签加单位

```
const linePlot = new g2plot.Line('canvas', {
  title:{
    text:'这是一个基础折线图'
  },
  description:{
    text: '折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式。'
  },
  data,
  xField: 'year',
  yField: 'value',
  color:'#FE740C',
  point: {
    visible: true,
    size: 5,
    style:{
      fill:'#7979F5',
      lineWidth: 2,
      fillOpacity: 0.6
    }
  },
  yAxis:{
    formatter:(v)=>{
      return v +'k';
    }
  },
  label:{
    visible: true
  }
});
linePlot.render();
```

最终结果：

src as img as p="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*wYxGRJUDoloAAAAAAAAAAABkARQnAQ" width="400">(/p> as )

经过上面由浅至深的三步教程，你应该已经基本了解 g2plot 的使用方法了，不过这远远不是终点，g2plot 还有很多有趣的配置和特性等待你的尝试和探索。更多基础功能请参考[图表通用配置](generalConfig.zh-CN.md)及[各图表配置项](./plots/)，一些尚在实验阶段的高级功能请移步[高级功能](./advanced)。
