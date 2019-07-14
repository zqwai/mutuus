﻿<%@ Page Title="" Language="C#" MasterPageFile="~/fee/Site1.Master" AutoEventWireup="true" CodeBehind="f_modify.aspx.cs" Inherits="DB.Web.fee.f_modify" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
                  <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Mutuus管理系统</title>
    <!-- public -->
    <link href="http://www.imutuus.com/admin/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://www.imutuus.com/admin/font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="http://www.imutuus.com/admin/css/animate.css" rel="stylesheet">
    <!-- plugins -->
    <link href="http://www.imutuus.com/admin/css/plugins/dataTables/datatables.min.css" rel="stylesheet">
    <!-- coustom -->
    <link href="http://www.imutuus.com/admin/css/style.css" rel="stylesheet">
    <link href="http://www.imutuus.com/admin/css/coustom.css" rel="stylesheet">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <!-- breadcrumb begin -->
    <div class="row border-bottom white-bg clearfix" data-desc='标题-锚标签'>
        <div class="col-lg-10">
            <ol class="breadcrumb">
                <li>
                    <a href="index.aspx"><i class="fa fa-home"></i>首页</a>
                </li>
                <li>费用管理
                </li>
                <li class="active">
                    <strong>修改</strong>
                </li>
            </ol>
        </div>
    </div>
    <!-- breadcrumb begin -->

    <!-- wrapper-content begin-->
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">

                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>修改</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                        </div>
                    </div>
                    <div class="ibox-content">


                        <ul class="form-horizontal m-b clearfix" style="list-style: none;">


                            <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                                <ContentTemplate>

                                    <li class="form-group clearfix">
                                        <label class="col-sm-2 control-label">学生</label>
                                        <div class="col-sm-6">
                                            <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" Enabled="False"></asp:DropDownList>
                                        </div>
                                    </li>
                                </ContentTemplate>
                            </asp:UpdatePanel>
                              <div class="hr-line-dashed"></div>

                            <li class="form-group clearfix">
                                <label class="col-sm-2 control-label">费用总额</label>
                                <div class="col-sm-6">
                                    <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>

                                </div>
                            </li>

                            <div class="hr-line-dashed"></div>

                            <li class="form-group clearfix">
                                <label class="col-sm-2 control-label">剩余现金</label>
                                <div class="col-sm-6">
                                      <asp:Label ID="lf" runat="server" Text="Label"></asp:Label>

                                </div>
                            </li>


                            <div class="hr-line-dashed"></div>

                            <li class="form-group clearfix">
                                <label class="col-sm-2 control-label">总天数</label>
                                <div class="col-sm-10">
                                    <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label>

                                </div>
                            </li>

                            <div class="hr-line-dashed"></div>

                            <li class="form-group clearfix">
                                <label class="col-sm-2 control-label">剩余天数</label>
                                <div class="col-sm-6">

                                    <input type="text" class="form-control" placeholder="剩余天数" runat="server" id="time">
                                </div>
                            </li>




                            <div class="hr-line-dashed"></div>
                            <li class="form-group clearfix">
                                <label class="col-sm-2 control-label">单价</label>
                                <div class="col-sm-6">

                                    <input type="text" class="form-control" placeholder="单价" runat="server" id="pm">
                                </div>
                            </li>



                            <div class="hr-line-dashed"></div>

                                <li class="form-group clearfix">
                                <label class="col-sm-2 control-label">修改方式</label>
                                <div class="col-sm-6">
                                    <asp:DropDownList ID="DropDownList2" runat="server">
                                        <asp:ListItem Value="1">消费</asp:ListItem>
                                        <asp:ListItem Value="2">退费</asp:ListItem>
                                    </asp:DropDownList>

                                </div>
                            </li>
                            <div class="hr-line-dashed"></div>

                            <li class="form-group clearfix">
                                <label class="col-sm-2 control-label">金额</label>
                                <div class="col-sm-6">

                                    <input type="text" class="form-control" placeholder="金额" runat="server" id="mo">
                                </div>
                            </li>

                            <div class="hr-line-dashed"></div>

                            <li class="form-group clearfix">
                                <label class="col-sm-2 control-label"></label>
                                <div class="col-sm-6">

                                    <table class="table table-bordered " >
                                        <thead>
                                            <tr>
                                               <th>日期</th>
                                                <th colspan="2">状态</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <asp:Repeater ID="Repeater1" runat="server"    >
                                            <ItemTemplate>
                                              <tr>
                                                <td> <%#Eval("date")%></td>
                                                <td colspan="2"><%#Eval("statusname")%></td>
                                              </tr>
                                            </ItemTemplate>
                                        </asp:Repeater>
                                      </tbody>
                                      <tfoot>
                                        <tr>
                                          <td>
                                            签到天数： <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
                                          </td>
                                          <td>
                                            病假天数：  <asp:Label ID="Label4" runat="server" Text="Label"></asp:Label>
                                          </td>
                                          <td>
                                            事假天数：  <asp:Label ID="Label5" runat="server" Text="Label"></asp:Label>
                                          </td>
                                        </tr>
                                      </tfoot>
                                    </table>

                                </div>
                            </li>

                            <div class="hr-line-dashed"></div>

                            <li class="form-group clearfix">
                              <label class="col-sm-2 control-label"></label>

                              <div class="col-sm-6">
                                  <asp:LinkButton ID="LinkButton1" runat="server" CssClass="btn btn-info" OnClick="LinkButton1_Click"><i class="fa fa-plus"></i> 保存</asp:LinkButton>
                                  <asp:LinkButton ID="LinkButton2" runat="server" CssClass="btn btn-default" OnClick="LinkButton2_Click"><i class="fa fa-backward"></i> 返回</asp:LinkButton>
                              </div>
                            <li>

                        </ul>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Chosen -->
    <script src="http://www.imutuus.com/admin/js/plugins/chosen/chosen.jquery.js"></script>
    <!-- Data picker -->
    <script src="http://www.imutuus.com/admin/js/plugins/datetimepicker/bootstrap-datetimepicker.min.js"></script>
    <script src="http://www.imutuus.com/admin/js/plugins/datetimepicker/bootstrap-datetimepicker.zh-CN.js"></script>
    <!-- iCheck -->
    <script src="http://www.imutuus.com/admin/js/plugins/iCheck/icheck.min.js"></script>
    <script>

        $(document).ready(function () {
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });

            $('.input-group.day').datetimepicker({
                language: 'zh-CN',
                format: 'yyyy-mm-dd ',
                weekStart: 1, //一周从哪一天开始  hh:ii
                todayBtn: 1,
                autoclose: 1,  //是否立即关闭此日期时间选择器。
                todayHighlight: 1,
                startView: 2,// 日期时间选择器打开之后首先显示的视图。
                minView: 3,  //日期时间选择器所能够提供的最精确的时间选择视图。
                // forceParse: 0,  //当选择器关闭的时候，是否强制解析输入框中的值。
            });
            $('.input-group.time').datetimepicker({
                language: 'zh-CN',
                format: 'hh:ii',
                weekStart: 1, //一周从哪一天开始
                todayBtn: 1,
                autoclose: 1,  //是否立即关闭此日期时间选择器。
                todayHighlight: 1,
                startView: 1,// 日期时间选择器打开之后首先显示的视图。
                minView: 0,  //日期时间选择器所能够提供的最精确的时间选择视图。
                // forceParse: 0,  //当选择器关闭的时候，是否强制解析输入框中的值。
            });
            // chosen select美化
            var config = {
                '.chosen-select': {},
                // '.chosen-select-deselect'  : {allow_single_deselect:true},
                '.chosen-select-no-single': { disable_search_threshold: 10 },
                '.chosen-select-no-results': { default_no_result_text: '没找到:' },
                '.chosen-select-width': { width: "95%" }
            }
            for (var selector in config) {
                $(selector).chosen(config[selector]);
            }
        });

    </script>
</asp:Content>
