<style lang="stylus" scoped>
.commontablewrap {
  /deep/.ivu-col .ivu-col-span-6 {
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    min-height: 35px;
  }
}
</style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x min150 title" colspan="12">企业标识</td>
        <td class="pd_x min150 title" colspan="12">{{ data.key }}</td>
      </tr>
    </table>

    <tableReportTemp :data="data" :infos="infos" />
  </div>
</template>

<script>
import tableReportTemp from './tableReportTemp'
export default {
  name: 'familyTree',
  props: ['data'],
  components: {
    tableReportTemp
  },
  data () {
    return {
      infos: {
        TITLE: {
          principalPartList: '关联主体信息',
          principalPartLinkList: '主体关系信息'
        },
        FIELD: {
          principalPartList: [
            {
              title: '主体名称',
              key: 'name',
              align: 'center',
              width: 100
            },
            {
              title: '主体类型',
              key: 'type',
              align: 'center',
              width: 100
            },
            {
              title: '是否为被查询主体',
              key: 'inNode',
              align: 'center',
              width: 100
            },
            {
              title: '主体属性',
              key: 'property',
              align: 'center',
              render: (h, params) => {
                const render = [
                  h('Row', {
                    props: {
                    }
                  }, [
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '主体名称:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.name),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '注册号:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.regNo)
                  ]
                  ),
                  h('Row', {
                    props: {
                    }
                  }, [
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '成立日期'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.esDate),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '统一社会信用代码:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.creditNo)
                  ]
                  ),
                  h('Row', {
                    props: {
                    }
                  }, [
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '注册资本(万元):'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.regCap),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '币种:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.regCapCur)
                  ]
                  ),
                  h('Row', {
                    props: {
                    }
                  }, [
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '行业代码:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.industryCode),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '企业状态:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.entStatus)
                  ]
                  ),
                  h('Row', {
                    props: {
                    }
                  }, [
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '疑似关系信息:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.sameValue),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '行业描述:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.property.industryDesc)
                  ]
                  )
                ]
                return h('div', {
                  style: {
                    'border-bottom': '1px solid #eee',
                    'border-right': '1px solid #eee',
                    'margin-top': '15px',
                    'margin-bottom': '15px'
                  }
                }, render)
              }
            }
          ],
          principalPartLinkList: [
            {
              title: '关系类型',
              key: 'type',
              align: 'center',
              width: 100
            },
            {
              title: '目标主体 id',
              key: 'source',
              align: 'center',
              width: 100
            },
            {
              title: '源主体 id',
              key: 'target',
              align: 'center',
              width: 100
            },
            {
              title: '关系属性',
              key: 'linkProperty',
              align: 'center',
              render: (h, params) => {
                const render = [
                  h('Row', {
                    props: {
                    }
                  }, [
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '认缴出资日期:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.linkProperty.subscribeFundingDate),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '认缴出资金额:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.linkProperty.subscribeFundingAmount)
                  ]
                  ),
                  h('Row', {
                    props: {
                    }
                  }, [
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '认缴出资币种:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.linkProperty.subscribeFundingCurrency),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '认缴出资比例(%):'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.linkProperty.subscribeFundingPercentage)
                  ]
                  ),
                  h('Row', {
                    props: {
                    }
                  }, [
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '职位:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.linkProperty.position),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, '是否为法人:'),
                    h('Col', {
                      props: {
                        span: '6'
                      }
                    }, params.row.linkProperty.legal)
                  ]
                  )
                ]
                return h('div', {
                  style: {
                    'border-bottom': '1px solid #eee',
                    'border-right': '1px solid #eee',
                    'margin-top': '15px',
                    'margin-bottom': '15px'
                  }
                }, render)
              }
            }
          ]
        }
      }
    }
  }
}

</script>
