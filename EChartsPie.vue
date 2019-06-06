<template>
    <div class="echarts-pie-container">
        <chart :options="options"></chart>
    </div>
</template>

<script>
    export default {
        name: 'EChartsPie',
        data() {
            return {
                options: {
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        show: false,
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            hoverAnimation: false,
                            avoidLabelOverlap: false,
                            silent: true,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center',
                                    textStyle: {
                                        fontSize: 40,
                                        color: 'green',
                                    },
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 1, name: '直接访问'},
                                {value: 99, name: '邮件营销'},
                            ]
                        },
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['20%', '25%'],
                            hoverAnimation: false,
                            avoidLabelOverlap: false,
                            silent: true,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'center',
                                    formatter: function () {
                                        return '资产(元)\r\n 23000'
                                    },
                                    textStyle: {
                                        fontSize: 10,
                                        color: 'green',
                                    },
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 0.1, name: '直接访问'},
                                {value: 0.1, name: '邮件营销'},
                            ]
                        }
                    ]
                }
        }
        }
    }
</script>

<style scoped>

</style>