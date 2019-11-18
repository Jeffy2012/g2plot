import { DataPointType } from '@antv/g2/lib/interface';
import * as _ from '@antv/util';

export default class LabelParser {
  public config: DataPointType = {};
  private plot: any;
  private originConfig: any;

  constructor(cfg) {
    const { plot, ...rest } = cfg;
    this.plot = plot;
    this.originConfig = rest;
    this._init(cfg);
  }

  private _init(cfg) {
    _.assign(this.config, cfg);
    this.config.callback = (val) => {
      return this._parseCallBack(val);
    };
  }

  private _parseCallBack(val) {
    const labelProps = this.originConfig;
    const theme = this.plot.getPlotTheme();
    const config: DataPointType = { ...labelProps };
    this._parseOffset(labelProps, config);
    if (labelProps.position) {
      if (_.isFunction(labelProps.position)) {
        config.position = labelProps.position(val);
      } else {
        config.position = labelProps.position;
      }
    }
    if (labelProps.formatter) {
      config.formatter = labelProps.formatter;
    }
    if (labelProps.style) {
      if (_.isFunction(labelProps.style)) {
        config.textStyle = labelProps.style(val);
      } else {
        config.textStyle = labelProps.style;
      }
    }
    config.textStyle = _.deepMix({}, _.get(theme, 'label.style'), config.textStyle);
    if (labelProps.autoRotate) {
      config.autoRotate = labelProps.autoRotate;
    }

    return config;
  }

  private _parseOffset(props, config) {
    const mapper = ['offset', 'offsetX', 'offsetY'];
    let count = 0;
    _.each(mapper, (m) => {
      if (_.has(props, m)) {
        config[m] = props[m];
        count++;
      }
    });
    // 如用户没有设置offset，而label position又为middle时，则默认设置offset为0
    if (count === 0 && _.get(props, 'position') === 'middle') {
      config.offset = 0;
    }
  }
}
