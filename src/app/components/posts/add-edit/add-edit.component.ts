import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.interface';
import { ModalConfig } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  @Input() selectedPost: Post = null;
  @Output() closeModal = new EventEmitter();
  @Output() savePost = new EventEmitter<Partial<Post>>();

  isEditMode = false;
  postForm: FormGroup;
  dataToSave: Partial<Post>;
  modalConfig: ModalConfig;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.modalConfig = { title: 'Add post' };
    this.initForm();
    if (this.selectedPost && this.selectedPost.id > 0) {
      this.isEditMode = true;
      this.modalConfig = { title: 'Edit post' };
    }
  }

  initForm(): void {
    this.postForm = this.formBuilder.group({
      title: [
        this.selectedPost && this.selectedPost.title,
        Validators.required,
      ],
      body: [this.selectedPost && this.selectedPost.body, Validators.required],
    });
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onSubmit(): void {
    this.postForm.markAllAsTouched();
    if (this.postForm.valid) {
      if (this.isEditMode) {
        this.dataToSave = { ...this.selectedPost, ...this.postForm.value };
      } else {
        this.dataToSave = { ...this.postForm.value };
      }
      this.savePost.emit(this.dataToSave);
    }
  }
}
