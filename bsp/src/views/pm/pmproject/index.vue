<template>
  <PartCard title="项目概况" :is-header-split="true">
    <el-container class="list-container">
      <el-header>
        <SearchArea :show-all-search.sync="showAllSearch">
          <el-form :model="dataForm" @keyup.enter.native="onSearchQuery()">
            <el-row :gutter="14">
              <el-col :span="8">
                <el-form-item>
                  <el-input />
                  <!-- <el-select v-model="dataForm.projectIds" filterable placeholder="请选择项目编号" clearable collapse-tags multiple>
                  <el-option v-for="item in projectList" :key="item.id" :label="item.customCode + '-' + item.engineeOrgName + '-' + item.projectName" :value="item.id" />
                  </el-select>-->
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item>
                  <el-input />
                  <!-- <el-select v-model="dataForm.orgIds" placeholder="工程管理部" clearable filterable multiple collapse-tags>
                  <el-option v-for="item in companyList" :key="item.id" :label="item.abbreviation" :value="item.id" />
                  </el-select>-->
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label>
                  <el-input />
                  <!-- <el-select v-model="dataForm.status" multiple collapse-tags placeholder="请选择项目状态" clearable>
                  <el-option v-for="item in projectStatusList" :key="item.code" :label="item.text" :value="item.code" />
                  </el-select>-->
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label>
                  <el-input />
                  <!-- <el-input v-model="dataForm.projectManagerListed" placeholder="项目经理" prefix-icon="el-icon-search" clearable /> -->
                </el-form-item>
              </el-col>
              <el-col class="queryBtn" :span="4">
                <el-form-item>
                  <!-- <el-button type="primary" size="small" @click="onSearchQuery()">查询</el-button>
                  <el-button class="black" size="small" @click="onReset">重置</el-button>-->
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="showAllSearch" :gutter="14">
              <el-col :span="12">
                <el-form-item>
                  <el-input />
                  <!-- <v-distpicker
                  :province="dataForm.provinceName"
                  :city="dataForm.cityName"
                  :area="dataForm.districtName"
                  @province="onChangeProvince"
                  @city="onChangeCity"
                  @area="onSelectArea"
                  @selected="onSelected"
                  ></v-distpicker>-->
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </SearchArea>

        <div class="operate-bar">
          <!-- <right-toolbar :showSearch.sync="showSearch" :checkLists="columns" :columnsVisible="columnsVisible" @columnSetting="columnSetting"></right-toolbar> -->
        </div>
      </el-header>
      <el-main>
        <div class="wrap-table">
          <vxe-table height="auto" :data="dataList" header-align="center" align="center">
            <vxe-table-column type="seq" width="60" />
            <vxe-table-column field="name" title="Name" />
            <vxe-table-column field="sex" title="Sex" />
            <vxe-table-column field="age" title="Age" />
            <template #pager>
              <el-pagination :current-page="1" :page-sizes="[10, 20, 50, 100]" :page-size="1" :total="1" layout="total, sizes, prev, pager, next, jumper" />
            </template>
          </vxe-table>
        </div>
      </el-main>
    </el-container>

    <!-- <div class="wrap-table">
        <el-table v-loading="dataListLoading" :data="dataList" border style="width: 100%" @selection-change="selectionChangeHandle">
          <el-table-column label="序号" fixed="left" width="80" align="center">
            <template slot-scope="scope">
              <span v-text="getIndex(scope.$index)"></span>
            </template>
          </el-table-column>
          <el-table-column v-if="columnsVisible.includes('customCode')" prop="customCode" fixed="left" min-width="400" :show-overflow-tooltip="true" header-align="left" align="left" label="项目名称">
            <template slot-scope="scope">{{ scope.row.customCode }}-{{ scope.row.engineeOrgName }}-{{ scope.row.projectName }}</template>
          </el-table-column>
          <el-table-column v-if="columnsVisible.includes('projectManagerListed')" prop="projectManagerListed" header-align="center" align="center" width="120" label="项目经理" />
          <el-table-column v-if="columnsVisible.includes('telephoneListed')" prop="telephoneListed" header-align="center" align="center" width="120" label="联系方式" />
          <el-table-column v-if="columnsVisible.includes('address')" prop="address" header-align="center" align="left" min-width="200" :show-overflow-tooltip="true" label="项目地址">
            <template slot-scope="scope">{{ scope.row.provinceName }}{{ scope.row.cityName }}{{ scope.row.districtName }}{{ scope.row.address }}</template>
          </el-table-column>
          <el-table-column v-if="columnsVisible.includes('status')" prop="status" header-align="center" align="center" width="150" label="项目状态">
            <template slot-scope="scope">
              <span>{{ displayStatus(scope.row.status) }}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" header-align="center" align="center" width="120" label="操作">
            <template slot-scope="scope">
              <el-button v-if="isAuth('pm:pmproject:info')" type="text" size="small" @click="addOrUpdateHandle('details', scope.row.id)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :current-page="pageIndex"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          :total="totalPage"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
        />
    </div>-->
  </PartCard>
</template>

<script>
export default {
  name: 'Pmproject',
  data () {
    return {
      showAllSearch: false,
      dataForm: {},
      dataList: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }
  },
  activated () {
    console.log(123123213)
  },
  methods: {
    tolink () {
      this.$router.push({ name: 'PmprojectEdit' })
    }
  }
}
</script>
