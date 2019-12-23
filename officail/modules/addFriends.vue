<template>
  <el-dialog :visible.sync="dialog" append-to-body v-dialogDrag title="机构人员表" width="1000px">
    <div>
      <div class="content" ref="content">
          
        <div ref="tabs" class="tabs-cont">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" >
            <el-tab-pane label="供应商机构" name="first">
                <div class="el-tabs__content">
                  <el-tree
                    :props="props"
                    :load="loadNode"
                    lazy
                    show-checkbox
                    @check-change="handleCheckChange">
                  </el-tree>
                </div>
            </el-tab-pane>
            <el-tab-pane label="九阳" name="second">
                <div class="el-tabs__content">
                  <div class="el-tabs__content">
                    <el-tree
                      :props="props"
                      :load="loadNode"
                      lazy
                      show-checkbox
                      @check-change="handleCheckChange">
                    </el-tree>
                  </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="群组列表" name="third">
                <div class="el-tabs__content">
                <p>群组列表</p>
                </div>
            </el-tab-pane>
            </el-tabs>
        </div>
        <div  ref="transfer" class="transfer-cont">
            <el-transfer
            style="text-align: left; display: inline-block"
            v-model="value"
            filterable
            class="el-transfer"
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :render-content="renderFunc"
            :titles="['可选', '已添加']"
            :button-texts="['移除', '添加']"
            :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
            }"
            @change="handleChange"
            :data="data">
            <!-- <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button> -->
            </el-transfer>
          </div>    

      </div>
  </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="cancel" type="text">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name:"",
  components: {},
  props: {},
  data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            // disabled: i % 4 === 0
          });
        }
        return data;
      };
    return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        },
        activeName: 'first',
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        dialog:false
    };
  },
  created() {
    
  },
  mounted() {
        this.widthfunction()
  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      widthfunction(){
          setTimeout(()=>{
            let a = this.$refs.tabs.clientWidth
            let b = this.$refs.transfer.clientWidth
            this.$refs.content.style.width = a + b + 10 + "px"
          },0)
         
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {

      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }
          console.log(data);
          resolve(data);
        }, 500);
      },
      cancel(){
            this.dialog = false
          },
          confirm(){
            
          }
  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.content{
    display: flex;
    justify-content:  space-between;
    align-items: center;
    width: 900px;
    border-radius:5px;
    position: relative;
    border:1px solid #C0C4CC;
}
.tabs-cont{
    border-right:1px solid #E4E7ED;
    border-radius: 4px 4px 0 0;
}
.el-tabs__content{
    height: 250px;
    overflow: auto;
}
.bottom{
    position: absolute;
    bottom:0px;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding-right: 20px;
}
.bottom>div>button{
    width: 70px;
    height: 40px;
    border:1px solid #E4E7ED;
    border-radius: 2px;
    background: white;
    margin-left:15px;
}
.bottom>div{
    width: 180px;
    display: flex;
    justify-content: space-around;
    float: right;
    margin-top:10px;
}
.transfer-cont >>> .el-transfer-panel{
  width: 200px;
}
.transfer-cont >>> .el-transfer__buttons{
  padding: 0 15px;
}
.transfer-cont >>> input{
  width: 150px;
}
</style>
