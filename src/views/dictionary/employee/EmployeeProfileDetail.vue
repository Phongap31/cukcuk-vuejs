<template>
  <div>
    <!-- <button id="btnAdd" class="m-btn m-btn-default" v-on:click="btnAddOnClick">
      <div class="m-btn-icon icon-add"></div>
      <div class="btn-text">Thêm nhân viên</div>
    </button> -->
    <div
      class="m-dialog dialog-detail"
      title="Thông tin nhân viên"
      :class="{ isHide: ishide }"
    >
      <div class="dialog-modal"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title">THÔNG TIN NHÂN VIÊN</div>
          <div class="dialog-header-close">
            <button v-on:click="btnCancelOnClick">x</button>
          </div>
        </div>
        <div class="dialog-body">
          <div class="m-row m-flex">
            <div class="m-col el-avatar-employee m-flex-1">
              <div class="el-avatar"></div>
              <div class="el-avatar-note text-align-center">
                (Vui lòng chọn ảnh có định dạng <br /><b
                  >.jpg, .jpeg, .png, .gif. </b
                >)
              </div>
            </div>
            <div class="m-col el-left m-flex-4">
              <div class="group-label-info">A. Thông tin chung:</div>
              <hr class="hr-group-label" />
              <div class="m-row mg-top-0 m-flex">
                <div class="m-col m-flex-1">
                  <div class="m-label">
                    Mã nhân viên (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      v-model="newEmployee.EmployeeCode"
                      id="txtEmployeeCode"
                      fieldName="EmployeeCode"
                      required
                      class="input-required"
                      type="text"
                    />
                  </div>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">
                    Họ và tên (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      v-model="newEmployee.FullName"
                      id="txtFullName"
                      fieldName="FullName"
                      class="input-required"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-flex-1">
                  <div class="m-label">Ngày sinh</div>
                  <input
                    v-model="newEmployee.DateOfBirth"
                    class="m-combobox-input"
                    type="date"
                    autocomplete="off"
                  />
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">Giới tính</div>
                  <select
                    v-model="newEmployee.Gender"
                    id="cbxGender"
                    class="m-control"
                  >
                    <option value="1">Nam</option>
                    <option value="0">Nữ</option>
                  </select>
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-flex-1">
                  <div
                    class="m-label"
                    title="Số chứng minh thư nhân dân hoặc căn cước công dân"
                  >
                    Số CMTND/ Căn cước (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      v-model="newEmployee.IdentityNumber"
                      id="txtIdentityNumber"
                      fieldName="text"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">Ngày cấp</div>
                  <input
                    v-model="newEmployee.IdentityDate"
                    class="m-combobox-input"
                    type="date"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-flex-1">
                  <div class="m-label">Nơi cấp</div>
                  <div class="m-control">
                    <input
                      v-model="newEmployee.IdentityPlace"
                      id="txtIdentityPlace"
                      fieldName="PhoneNumber"
                      class="input-required"
                      type="text"
                    />
                  </div>
                </div>
                <div class="m-flex-1"></div>
              </div>
              <div class="m-row m-flex">
                <div class="m-col m-flex-1">
                  <div class="m-label">
                    Email (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      v-model="newEmployee.Email"
                      id="txtEmail"
                      fieldName="Email"
                      type="email"
                      required
                      placeholder="example@domain.com"
                    />
                  </div>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">
                    Số điện thoại (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      v-model="newEmployee.PhoneNumber"
                      id="txtPhoneNumber"
                      fieldName="FullName"
                      class="input-required"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="group-label-info" style="margin-top: 30px">
                B. Thông tin công việc:
              </div>
              <hr class="hr-group-label" />
              <div class="m-row m-flex">
                <div class="m-flex-1">
                  <div class="m-label">Vị trí</div>
                  <select
                    v-model="newEmployee.PositionId"
                    id="cbxPosition"
                    fieldName="CustomerGroupName"
                    fieldValue="CustomerGroupId"
                    api="/api/customergroups"
                    class="m-control"
                  >
                    <option value="3700cc49-55b5-69ea-4929-a2925c0f334d">
                      Giám đốc
                    </option>
                    <option value="25c6c36e-1668-7d10-6e09-bf1378b8dc91">
                      Thu ngân
                    </option>
                    <option value="148ed882-32b8-218e-9c20-39c2f00615e8">
                      Nhân viên Marketing
                    </option>
                  </select>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">Phòng ban</div>
                  <select
                    v-model="newEmployee.DepartmentId"
                    id="cbnDepartment"
                    fieldName="CustomerGroupName"
                    fieldValue="CustomerGroupId"
                    api="/api/customergroups"
                    class="m-control"
                  >
                    <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">
                      Phòng Marketing
                    </option>
                    <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">
                      Phòng công nghệ
                    </option>
                    <option value="469b3ece-744a-45d5-957d-e8c757976496">
                      Phòng nhân sự
                    </option>
                    <option value="17120d02-6ab5-3e43-18cb-66948daf6128">
                      Phòng đào tạo
                    </option>
                  </select>
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-flex-1">
                  <div class="m-label">Mã số thuế cá nhân</div>
                  <div class="m-control">
                    <input
                      v-model="newEmployee.PersonalTaxCode"
                      id="txtAddress"
                      fieldName="Address"
                      type="text"
                    />
                  </div>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">Mức lương cơ bản</div>
                  <div class="m-control">
                    <input
                      v-model="newEmployee.Salary"
                      id="txtSalary"
                      fieldName="Salary"
                      type="text"
                      style="text-align: right; padding-right: 56px"
                    /><span class="currency-for-input">(VNĐ)</span>
                  </div>
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-flex-1">
                  <div class="m-label">Ngày gia nhập</div>
                  <input
                    v-model="newEmployee.JoinDate"
                    class="m-combobox-input"
                    type="date"
                    autocomplete="off"
                  />
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">Tình trạng công việc</div>
                  <select
                    v-model="newEmployee.WorkStatus"
                    id="cboWorkStatus"
                    fieldName="CustomerGroupName"
                    fieldValue="CustomerGroupId"
                    api="/api/customergroups"
                    class="m-control"
                  >
                    <option value="1">Đang làm việc</option>
                    <option value="2">Đang thử việc</option>
                    <option value="0">Nghỉ việc</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <button
            id="btnCancel"
            class="m-btn m-btn-default m-btn-cancel"
            v-on:click="btnCancelOnClick"
          >
            Hủy
          </button>
          <button
            id="btnSave"
            @click="btnAddOnClick()"
            class="m-btn m-btn-default"
          >
            <i class="far fa-save"></i><span class="btn-text">Lưu</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["ishide", "employeeForUpdate", "addOrupdateChild"],
  methods: {
    async btnAddOnClick() {
      if (this.addOrupdateChild == "add") {
        axios({
          method: "POST",
          url: "http://api.manhnv.net/api/employees",
          data: this.newEmployee,
        })
          .then((res) => console.log(res.status))
          .catch((e) => console.log(e));
        console.log("add");
      } else if (this.addOrupdateChild == "update") {
        await axios
          .put("http://api.manhnv.net/api/employees", this.newEmployee)
          .then((res) => console.log(res.status))
          .catch((e) => console.log(e));
        console.log("update");
        location.reload();
      }
    },
    btnCancelOnClick() {
      this.$emit("ishideToParent", true);
    },
    rowOnClick(employee) {
      alert(employee.FullName);
    },
  },
  updated() {
    this.newEmployee = this.employeeForUpdate;
    this.newEmployee.DateOfBirth = this.newEmployee.DateOfBirth.split("T")[0];
    this.newEmployee.JoinDate = this.newEmployee.JoinDate.split("T")[0];
    this.newEmployee.IdentityDate = this.newEmployee.IdentityDate.split("T")[0];
  },
  data() {
    return {
      newEmployee: Object,
      dialog: false,
      display: "none",
    };
  },
};
</script>
<style scoped>
.isHide {
  display: none;
}
.m-dialog {
  z-index: 999;
}

.dialog-header {
  position: relative;
  height: 40px;
  line-height: 60px;
  padding-left: 16px;
  display: flex;
  font-size: 24px;
}

.dialog-header-close {
  position: absolute;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  top: 10px;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 24px;
  line-height: 24px;
}
.dialog-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
}

.dialog-content {
  position: fixed;
  border-radius: 5px;
  width: 750px;
  background-color: #fff;
  left: calc(50% - 325px);
  top: calc(50% - 450px);
}
.dialog-body {
  padding: 0 16px 16px 16px;
}
.dialog-footer {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 24px;
  box-sizing: border-box;
}
.el-avatar-employee {
  padding-top: 16px;
  padding-right: 16px;
}
.el-avatar-note {
  font-size: 12px;
}
.el-avatar-employee .el-avatar {
  border: 1px solid #ccc;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(/content/img/default-avatar.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.currency-for-input {
  position: absolute;
  right: 40px;
  line-height: 40px;
  font-style: italic;
}
</style>