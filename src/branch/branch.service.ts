import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateBranchDto) {
    return this.prisma.branch.create({ data: dto });
  }

  findOne(id: string) {
    return this.prisma.branch.findUnique({ where: { id } });
  }

  findAll() {
    return this.prisma.branch.findMany();
  }

  update(id: string, dto: UpdateBranchDto) {
    return this.prisma.branch.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.branch.delete({ where: { id } });
  }
}
