import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateOrderDto) {
    return this.prisma.order.create({ data: dto });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  update(id: string, dto: UpdateOrderDto) {
    return this.prisma.order.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}
