xui.Class('App.ColumnsNone6', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("8.380952380952381em")
                .setTop("10.666666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("first name")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("8.380952380952381em")
                .setTop("12.952380952380953em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("middle name")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input10")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("8.380952380952381em")
                .setTop("16em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("last name")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput26")
                .setDirtyMark(false)
                .setLeft("8.380952380952381em")
                .setTop("19.047619047619047em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("age")
                .setType("number")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput30")
                .setDirtyMark(false)
                .setLeft("14.476190476190476em")
                .setTop("22.095238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("sex")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput35")
                .setDirtyMark(false)
                .setLeft("3.8095238095238093em")
                .setTop("6.857142857142857em")
                .setWidth("25.6em")
                .setLabelSize("8em")
                .setLabelCaption("Apt Date Time")
                .setType("datetime")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input12")
                .setDirtyMark(false)
                .setLeft("16em")
                .setTop("25.142857142857142em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("city")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput47")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("27.428571428571427em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("mobile no")
                .setType("number")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput49")
                .setDirtyMark(false)
                .setLeft("19.047619047619047em")
                .setTop("29.714285714285715em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("fees")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14")
                .setDirtyMark(false)
                .setLeft("23.61904761904762em")
                .setTop("32em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("referred by")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button8")
                .setDirtyMark(false)
                .setLeft("17.523809523809526em")
                .setTop("38.857142857142854em")
                .setCaption("save and fix appointment ")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("38.095238095238095em")
                .setCaption("reset")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});