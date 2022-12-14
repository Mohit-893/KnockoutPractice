var Employee = ko.observableArray([
    {EmpID:1, Name:'Mohit', DOB:'06 Jul 2000', DOJ:'18 Jul 2022', Address:'Rewari'},
    {EmpID:2, Name:'Rohit', DOB:'16 May 1999', DOJ:'18 Jul 2022', Address:'Gaziabad'},
    {EmpID:3, Name:'Suman', DOB:'26 Jan 2000', DOJ:'18 Jul 2022', Address:'Noida'},
    {EmpID:4, Name:'Rahul', DOB:'09 Sep 1998', DOJ:'18 Jul 2022', Address:'Delhi'},
    {EmpID:5, Name:'Mansi', DOB:'16 Nov 2000', DOJ:'18 Jul 2022', Address:'Aligarh'}
]);
     
  
    var EmployeeModel = function (data) {   
        
        this.empId = ko.observable().extend({
            required: {
                params: true,
                message: 'Employee Id is required.'
            }
        });
        this.empName = ko.observable().extend({
            required: {
                params: true,
                message: 'Employee Name is required.'
            }
        });
        this.dob = ko.observable().extend({
            required: {
                params: true,
                message: 'Date of Birth is required.'
            }
        });
        this.doj = ko.observable().extend({
            required: {
                params: true,
                message: 'Date of Joining is required.'
            }
        });
        this.address = ko.observable().extend({
            required: {
                params: true,
                message: 'Address is required.'
            }
        });  
        this.update(data);
    };


EmployeeModel.prototype.update = function (data) {
        if (data != null) {
            this.empId(data.EmpID);
            this.empName(data.Name);
            this.dob(data.DOB);
            this.doj(data.DOJ);
            this.address(data.Address);
        }
    };

    var EmployeeViewModel = function (items) {
        var self = this;       
        self.items = ko.observableArray(ko.utils.arrayMap(items, function (data) {
            return new EmployeeModel(data);
        }));
        self.SelectItem = self.SelectItem.bind(self);
        self.itemForEditing = ko.observable();
        self.AcceptItem = self.AcceptItem.bind(self);
        self.RemoveItem = self.RemoveItem.bind(self);
    };

    ko.utils.extend(EmployeeViewModel.prototype, {
       
        AcceptItem: function (item) {
            var self = this;
            var errors = ko.validation.group(item, { deep: true });
            if (errors().length > 0) {
                errors.showAllMessages();
                return;
            }         
            var data = ko.toJS(item);
            self.items.push(data);      
        },

        SelectItem: function (item) {
            this.itemForEditing(item);
            this.items.remove(item);
        },


        RemoveItem: function (item) {
           alert("Are you sure you want to delete data")
            this.items.remove(item);
        }
        
    });
var EmployeeVM = new EmployeeViewModel(Employee());
ko.applyBindings(EmployeeVM, document.getElementById('mainDiv')); //main div id
EmployeeVM.itemForEditing(new EmployeeModel());