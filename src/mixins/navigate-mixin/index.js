/**
 * 跳转兼容方案
 * ** 注意 ** 请在 page 页中 mixins 子组件跳转请使用 this.$root.navigateTo
 * ** 注意 ** 若有预加载数据需求（ onPrefetch ）请传相对地址
 */
import wepy from 'wepy';

export default class extends wepy.mixin {
  navigateTo( ...params ) {
    let len = getCurrentPages().length;

    if ( len < 5 ) {
      this.$navigate( ...params );
    } else {
      this.$redirect( ...params );
    }
  }
}
