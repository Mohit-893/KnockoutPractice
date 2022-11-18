var Employee = ko.observableArray([
    {EmpID:1, Name:'Mohit', DOB:'06 Jul 2000', DOJ:'18 Jul 2022', Address:'Rewari'},
    {EmpID:2, Name:'Rohit', DOB:'16 May 1999', DOJ:'18 Jul 2022', Address:'Gaziabad'},
    {EmpID:3, Name:'Suman', DOB:'26 Jan 2000', DOJ:'18 Jul 2022', Address:'Noida'},
    {EmpID:4, Name:'Rahul', DOB:'09 Sep 1998', DOJ:'18 Jul 2022', Address:'Delhi'},
    {EmpID:5, Name:'Mansi', DOB:'16 Nov 2000', DOJ:'18 Jul 2022', Address:'Aligarh'}
    ]);

    var details = ko.observable();

    var empId = ko.observable()
    .extend({ required: {
        params: true,
        message: 'empID is required.'
    }});

    var empName = ko.observable()
    .extend({ required: {
        params: true,
        message: 'empName is required.'
    }});

    var dob = ko.observable()
    .extend({ required: {
        params: true,
        message: 'dob is required.'
    }});

    var doj = ko.observable()
    .extend({ required: {
        params: true,
        message: 'empID is required.'
    }});

    var address = ko.observable()
    .extend({ required: {
            params: true,
            message: "address is required."
        }
    });

    // var validation = ko.validation.configure({
    //         registerExtenders: true,
    //         messagesOnModified: true,
    //         insertMessages: true,
    //         parseInputAttributes: true,
    //         messageTemplate: null
    //     });
            
function viewModel()  {

    // this.empId = ko.observable()
    // .extend({ required: {
    //     params: true,
    //     message: 'empID is required.'
    // }});
    // this.empName = ko.observable();
    // this.dob = ko.observable();
    // this.doj = ko.observable();
    // this.address = ko.observable().extend({
    //     required: {
    //         params: true,
    //         message: "address is required."
    //     }
    // });

    // var Validate = function(){
    //     debugger;
    //     empId.extend({
    //         validation: [{
    //             validator: function (val) {
    //                 return val != null && val != '' && val != 0;
    //             },
    //             message: 'EmpID is required.'
    //         }]
    //     });
    //     nAme.extend({
    //         required: {
    //             params: true,
    //             message: 'Name is required.'
    //         }
    //     });
    //     dob.extend({
    //         required: {
    //             params: true,
    //             message: 'Date of Birth is required.'
    //         }
    //     });
    //     doj.extend({
    //         required: {
    //             params: true,
    //             message: 'Date of Joining is required.'
    //         }
    //     });
    //     address.extend({
    //         required: {
    //             params: true,
    //             message: 'Address is required.'
    //         }
    //     });
    // }
     
            

    this.AcceptItem = function(){
        // let errors = ko.validation.group(viewModel, { deep: true });
        //     if (errors().length > 0) {
        //         errors.showAllMessages();
        //         return;
        //     }


        // var result = ko.validation.group(viewModel, {deep: true});
        // if (!viewModel.isValid()) 
        // {
        //     alert("Please fix all errors before preceding");
        //     result.showAllMessages(true);
    
        //     return false;
        // }

        // Validate();
        // ko.validation.configure({
        //     registerExtenders: true,
        //     messagesOnModified: true,
        //     insertMessages: true,
        //     parseInputAttributes: true,
        //     messageTemplate: null
        // });
        // validation();
        details(
            {
                EmpID: empId(),
                Name: empName(),
                DOB: dob(),
                DOJ: doj(),
                Address: address()
            }
        )
        Employee.push(details());
        details("");
        this.Reset();
    };

    this.Reset = function(){
        empId("");
        empName("");
        dob("");
        doj("");
        address("");
    }


    this.RemoveItem = function(data){
    Employee.remove(data);
    }



    this.SelectItem = function (data) {
        empId(data.EmpID);
        empName(data.Name);
        dob(data.DOB);
        doj(data.DOJ);
        address(data.Address);
        Employee.remove(data);
    }
};

// function setObservable(data) {
//     viewModel.empId(data.EmpID);
// }

// function validateModel() {
//     var Employee = ko.observableArray([
//         {EmpID:1, Name:'Mohit', DOB:'06 Jul 2000', DOJ:'18 Jul 2022', Address:'Rewari'},
//         {EmpID:2, Name:'Rohit', DOB:'16 May 1999', DOJ:'18 Jul 2022', Address:'Gaziabad'},
//         {EmpID:3, Name:'Suman', DOB:'26 Jan 2000', DOJ:'18 Jul 2022', Address:'Noida'},
//         {EmpID:4, Name:'Rahul', DOB:'09 Sep 1998', DOJ:'18 Jul 2022', Address:'Delhi'},
//         {EmpID:5, Name:'Mansi', DOB:'16 Nov 2000', DOJ:'18 Jul 2022', Address:'Aligarh'}
//         ]);
    
//         var details = ko.observable();
    
//         var empId = ko.observable().extend({ required: {
//             params: true,
//             message: 'empID is required.'
//         }});
//         var nAme = ko.observable();
//         var dob = ko.observable();
//         var doj = ko.observable();
//         var address = ko.observable();

//     empId.extend({
//         validation: [{
//             validator: function (val) {
//                 return val != null && val != '' && val != 0;
//             },
//             message: 'EmpID is required.'
//         }]
//     });
//     nAme.extend({
//         required: {
//             params: true,
//             message: 'Name is required.'
//         }
//     });
//     dob.extend({
//         required: {
//             params: true,
//             message: 'Date of Birth is required.'
//         }
//     });
//     doj.extend({
//         required: {
//             params: true,
//             message: 'Date of Joining is required.'
//         }
//     });
//     address.extend({
//         required: {
//             params: true,
//             message: 'Address is required.'
//         }
//     });
// };

// ko.applyBindings(new validateModel());

ko.applyBindings(new viewModel());