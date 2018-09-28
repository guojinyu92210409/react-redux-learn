/*
 * Copyright (c) 2018-present, 网信智投, Inc.
 *
 * @Author: Jone.Lin
 * @Date: 2018-08-28 22:28:11
 * @Last Modified by: Jone.Lin
 * @Last Modified time: 2018-08-30 02:11:25
 * @Note 配置文件
 */

// debug标记
export const _DEV_ = true

_DEV_ ||
  (() => {
    window.console = {
      info: () => {},
      log: () => {},
      warn: () => {},
      debug: () => {},
      error: () => {}
    }
  })()
