import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// Định nghĩa 1 mảng các phần tử user, gồm các thuộc tính:
  // tên, cân nặng, chiều cao, ảnh, id
  // Thực hiện việc hiển thị danh sách user ra bảng
  // Thực hiện xoá user, kiểm tra nếu cân nặng < 30 thì không cho xoá

  title = 'SANG SIEU CAP DEP TRAI';
  subTitle = 'Danh sach sinh vien';

  student = {
    name: 'Sang0711',
    age: 20,
    phone: '0335725011',
    email: 'nguyensang071102@gmail.com',
    img: 'data:image/jpeg;base64,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'
  };

  students = [
    {
      id: 1,
      name: 'Sang071102',
      age: 20,
      phone: '0335725011',
      email: 'nguyensang071102@gmail.com',
      img: 'data:image/jpeg;base64,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'
    },
    {
      id: 2,
      name: 'Sang07112002',
      age: 20,
      phone: '0335725011',
      email: 'nguyensang071102@gmail.com',
      img: 'data:image/jpeg;base64,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'
    },
    {
      id: 3,
      name: 'Tuannda5',
      age: 30,
      phone: '0392871868',
      email: 'tuannda3@fe.edu.vn',
      img: 'https://iap.poly.edu.vn/user/ph/PH16698.jpg'
    },
  ];

  remove(id: number) {
    // Cap nhat gan this.filterStudents thay vi gan cho this.students
    this.filterStudents = this.filterStudents.filter(student => student.id !== id);
  }

  // Buoi 3
  // Search
  searchValue = '';
  // spread, lay tat ca phan tu cua student dua
  // gan cho filterStudents bang gia tri cua this.students
  filterStudents = this.students;

  onSearch(event: any) {
    this.searchValue = event.target.value;

    // Neu gan cho chinh this.student
    // thi sau khi filter mang goc se thay doi
    // xoa filter se khong tra ve kq nua

    // Gan phan hien thi cho 1 mang moi
    // Su dung mang goc de filter
    this.filterStudents = this.students.filter(student => {
      // 1. Chuyen ca name va searchValue ve dang viet thuong bang toLowerCase
      // 2. voi searchValue tien hanh .trim() de loai bo khoang trang o 2 dau
      const studentNameLowerCase = student.name.toLowerCase();
      const searchValueLowerCase = this.searchValue.toLowerCase().trim();

      return studentNameLowerCase.indexOf(searchValueLowerCase) !== -1;
    }
    );
  }

  // Form input
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    email: '',
    img: ''
  };

  onChangeInput(event: any, key: string) {
    const inputValue = event.target.value;
    // spread operator
    this.newUser = {
      ...this.newUser,
      [key]: inputValue
    };

    console.log(this.newUser);
    /*
        ~ tao object moi ben trong co cac cap key value cua object this.newUser
        {
          name: '',
          age: null,
          phone: '',
          email: '',
          img: '',

          [key]: inputValue, neu key la 'name' tuong duong voi name: inputValue
          Voi cu phap spread ... thi name se bi ghi de gia tri moi tu '' => inputValue
        } */
  }


  onSubmit() {
    // Validate truoc khi cap nhat du lieu
    if (!this.onValidate(this.newUser)) {
      // Neu k pass qua dieu kien validate, thi se return ra khoi ham submit luon
      return;
    }

    // Kiem tra xem this.newUser co id hay khong
    if (this.newUser.id) {
      // Neu co id thi se la cong viec chinh sua
      // Tim xem dau la phan tu co id la id dang duoc chinh sua
      for (let i = 0; i < this.students.length; i++) {
        // Kiem tra phan tu nao co id trung voi id cua du lieu chinh sua
        if (this.students[i].id === this.newUser.id) {
          // Khi tim thay thi gan gia tri cho phan tu do
          this.students[i] = this.newUser;
        }
      }
    } else {
      // Cong viec tao moi
      // Nhet thang newUser vao mang this.student
      this.newUser = {
        ...this.newUser,
        id: this.students.length + 1,
        age: Number(this.newUser.age)
      };

      this.students.push(this.newUser);
      // Van de gap phai: neu filterStudents = [...this.students]
      // thi se khong cap nhat moi duoc

      console.log(this.students, this.filterStudents)
    }

    // Cap nhat du lieu default cho newUser de hien thi ben view
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      email: '',
      img: ''
    }
  }

  // Validate
  onValidate(obj: any) {
    if (!obj.name || !obj.age || !obj.phone || !obj.img || !obj.email) {
      // ~ if(obj.name !== '' || obj.age !== '' ......)
      return false;
    }

    return true;
  }

  // Chinh sua
  onEdit(student: any) {
    this.newUser = student;
  }
}
